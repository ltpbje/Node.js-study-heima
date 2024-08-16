// 1.导入mysql模块
const mysql = require("mysql")

// 2.建立与MySQL数据库的连接关系
const db = mysql.createPool({
  host: "127.0.0.1", //数据库的IP地址
  user: "root", //登录数据库的账号
  password: "admin123", //录数据库的密码
  database: "my_db_01", //指定要操作哪个数据库
})

// //测试mysql 模块能否正常工作
// db.query("select 1", (err, results) => {
//   //mysql模块工作期间报错了
//   if (err) return console.log(err.message)

//   //能够成功的执行SQL语句
//   console.log(results)
// })

// // 查询users表中所有的数据
// const sqlStr = "select * from users"
// db.query(sqlStr, (err, results) => {
//   // 查询数据失败
//   if (err) return console.log(err.message)
//   // 查询数据成功
//   // 注意：如果执行的是select查询语句，则执行的结果是数组
//   console.log(results)
// })

// // 向 users 表中，新增一条数据，其中 username 的值为 Spider-Man，password 的值 pcc123
// const user = { username: "Spider-Man", password: "pcc123" }
// // 定义待执行的 SQL语句
// const sqlStr = "insert into users (username,password) values (?,?)"
// // 执行SQL语句
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//   // 执行SQL语句失败了
//   if (err) return console.log(err.message)
//   // 成功了
//   //    注意：如果执行的是 insert into 插入语句，则results 是一个对象
//   //    可以通过affectedRows属性，来判断是否插入数据成功
//   if (results.affectedRows === 1) {
//     console.log("插入数据成功")
//   }
// })

// 演示插入数据的便捷方式
const user = { username: "Spider-Man2", password: "pcc4321" }
// 定义待执行的SQL语句
const sqlStr = "insert into users set ?"
// 执行SQL语句
db.query(sqlStr, user, (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log("插入数据成功")
  }
})
