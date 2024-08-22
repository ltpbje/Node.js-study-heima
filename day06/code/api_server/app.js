// 导入express模块;
const express = require("express")
// 创建express的服务器实例;
const app = express()
// 导入 cors 中间件
const cors = require("cors")
// 将 cors 注册为全局中间件
app.use(cors())

// 配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 响应数据的中间件
app.use(function (req, res, next) {
  // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function (err, status = 1) {
    res.send({
      // 状态
      status,
      // 状态描述，判断 err 是 错误对象 还是 字符串
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

// 导入并注册用户路由模块
const userRouter = require("./router/user")
app.use("/api", userRouter)

// 调用app.listen方法，在指定的80端口启动web服务器;
app.listen(3007, () => {
  console.log("api server running at http//:127.0.0.1:3007")
})
