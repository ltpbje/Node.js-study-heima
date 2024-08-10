const express = require("express")
const app = express()

app.get("/", (req, res) => {
  // 抛出错误
  throw new Error("服务器内部发生错误")
  // res.send('Home Page')
})

// 2.定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的前溃
app.use((err, req, res, next) => {
  console.log("发生了错误" + err.message)
  res.send("Error:" + err.message)
  next()
})

app.listen(80, () => {
  console.log("http://127.0.0.1")
})
