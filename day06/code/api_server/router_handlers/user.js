// 导入数据库操作模块
const db = require("../db/index")
//导入bcryptjs这个包
const bcryptjs = require("bcryptjs")
exports.regUser = (req, res) => {
  // 接收表单数据
  const userinfo = req.body
  // console.log(userinfo)

  // 判断数据是否合法
  if (!userinfo.username || !userinfo.password) {
    return res.send({
      status: 1,
      message: "用户名或密码不能为空",
    })
  }

  //定义SQL语句，查询用户名是否被占用
  const sqlStr = "select * from ev_users where username = ?"
  db.query(sqlStr, userinfo.username, function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
      return res.send({ status: 1, message: err.message })
    }
    // 用户名被占用
    if (results.length > 0) {
      return res.send({ status: 1, message: "用户名被占用,请更换其他用户名" })
    }
    // 用户名可以使用
  })
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
      if (err) return res.send({ status: 1, message: err.message })
      if (results.affectedRows !== 1)
        return res.send({ status: 1, message: "注册用户失败，请稍后再试！" })
      // 注册成功
      res.send({ status: 0, message: "注册成功！" })
    }
  )
}
exports.login = (req, res) => {
  res.send("login OK")
}
