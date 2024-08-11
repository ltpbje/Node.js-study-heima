// 导入express模块;
const express = require("express")
// 创建express的服务器实例;
const app = express()

//1.导入解析表单数据的中间件body-parser
const parser = require("body-parser")

//2.使用app.use()注册中间件
app.use(parser.urlencoded({ extended: false }))

app.post("/user", (req, res) => {
  // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
  console.log(req.body)

  res.send("ok")
})

// 调用app.listen方法，在指定的80端口启动web服务器;
app.listen(80, () => {
  console.log("Express server running at http:127.0.0.1")
})
