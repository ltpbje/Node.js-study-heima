// 导入express模块;
const express = require("express")
// 创建express的服务器实例;
const app = express()
// 配置解析表单数的中间件
app.use(express.urlencoded({ extended: false }))

// 优先创建JSONP接口【这个接口不会被处理成CORS接口】
app.get("/api/jsonp", (req, res) => {
  // TODO：定义JSONP接口具体的实现过程
  //1.得到函数的名称
  const funcName = req.query.callback
  //2.定义要发送到客户端的数据对象
  const data = { name: "zs", age: 22 }
  //3.拼接出一个函数的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  //4.把拼接的字符串，响应给客户端
  res.send(scriptStr)
})

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
