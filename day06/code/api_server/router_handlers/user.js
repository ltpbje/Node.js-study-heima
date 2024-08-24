// 导入数据库操作模块
const db = require("../db/index")
//导入bcryptjs这个包
const bcryptjs = require("bcryptjs")
// 用这个包来生成 Token 字符串
const jwt = require("jsonwebtoken")
// 导入配置文件
const config = require("../config")

exports.regUser = (req, res) => {
  // 接收表单数据
  const userinfo = req.body
  // console.log(userinfo)

  // // 判断数据是否合法
  // if (!userinfo.username || !userinfo.password) {
  //   return res.send({
  //     status: 1,
  //     message: "用户名或密码不能为空",
  //   })
  // }

  //定义SQL语句，查询用户名是否被占用
  const sqlStr = "select * from ev_users where username = ?"
  db.query(sqlStr, userinfo.username, function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
      // return res.send({ status: 1, message: err.message })
      return res.cc(err)
    }
    // 用户名被占用
    if (results.length > 0) {
      return res.send({ status: 1, message: "用户名被占用,请更换其他用户名" })
    }
    // 用户名可以使用
    // 调用bcrypt.hashSync()对密码进行加密
    // console.log(userinfo)
    userinfo.password = bcryptjs.hashSync(userinfo.password, 10)
    // console.log(userinfo)
    // 定义插入用户的 SQL 语句：
    const sql = "insert into ev_users set ?"
    // 调用 `db.query()` 执行 SQL 语句，插入新用户：
    db.query(
      sql,
      { username: userinfo.username, password: userinfo.password },
      (err, results) => {
        // 执行 SQL 语句失败
        if (err)
          // return res.send({ status: 1, message: err.message })
          return res.cc(err)
        if (results.affectedRows !== 1)
          // return  res.send({ status: 1, message: "注册用户失败，请稍后再试！" })
          return res.cc("注册用户失败，请稍后再试！")
        // 注册成功
        // res.send({ status: 0, message: "注册成功！" })
        res.cc("注册成功！", 0)
      }
    )
  })
}
exports.login = (req, res) => {
  const userinfo = req.body
  const sql = "select * from ev_users where username =?"
  db.query(sql, userinfo.username, function (err, results) {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 执行 SQL 语句成功，  但是查询到数据条数不等于 1
    if (results.length !== 1) return res.cc("登录失败")
    // TODO：判断用户输入的登录密码是否和数据库中的密码一致
    // 拿着用户输入的密码,和数据库中存储的密码进行对比
    const compareResult = bcryptjs.compareSync(
      userinfo.password,
      results[0].password
    )
    if (!compareResult) return res.cc("登录失败!")
    // res.send("ok")
    // 剔除完毕之后，user 中只保留了用户的 id, username, nickname, email 这四个属性的值
    const user = { ...results[0], password: "", user_pic: "" }
    // 生成 Token 字符串
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: config.expiresIn,
    })
    res.send({
      status: 0,
      message: "登录成功!",
      // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
      token: "Bearer " + tokenStr,
    })
    // console.log(tokenStr)
  })
}
