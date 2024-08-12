// 导入express模块;
const express = require("express")
// 创建express的服务器实例;
const app = express()
// 配置解析表单数的中间件
app.use(express.urlencoded({ extended: false }))

// 一定要在路由之前，配置cors这个中间件，从而解决接口跨域的问题
const cros = require("cors")
app.use(cros())

// 导入路由模块
const router = require("./16.apiRouter")
// 把路由模块，注册到app上
app.use("/api", router)
// 调用app.listen方法，在指定的80端口启动web服务器;
app.listen(80, () => {
  console.log("Express server running at http:127.0.0.1")
})
