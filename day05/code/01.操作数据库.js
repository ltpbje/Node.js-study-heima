// 1.导入mysql模块
const mysql = require("mysql")

// 2.建立与MySQL数据库的连接关系
const db = mysql.createPool({
  host: "127.0.0.1", //数据库的IP地址
  user: "root", //登录数据库的账号
  password: "admin123", //录数据库的密码
  database: "my_db_01", //指定要操作哪个数据库
})

//测试mysql 模块能否正常工作
db.query("select 1", (err, results) => {
  //mysql模块工作期间报错了
  if (err) return console.log(err.message)

  //能够成功的执行SQL语句
  console.log(results)
})
