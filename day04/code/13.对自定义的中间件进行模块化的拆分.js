// 导入express模块;
const express = require("express")
// 创建express的服务器实例;
const app = express()

//1.导入自己封装的中间件模块
const customBodyParser = require("./14.custom-body-parser")

//这是解析表单数据的中间件
//2.将自定义的中间件函数，注册为全局可用的中间件
app.use(customBodyParser)
app.post("/user", (req, res) => {
  res.send(req.body)
})

// 调用app.listen方法，在指定的80端口启动web服务器;
app.listen(80, () => {
  console.log("Express server running at http:127.0.0.1")
})
