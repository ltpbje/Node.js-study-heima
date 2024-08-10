const express = require("express")
const app = express()

const mw1 = (req, res, next) => {
  console.log("调用了局部生效的中间件")
  next()
}

//2.创建路由
app.get("/", mw1, (req, res) => {
  res.send("Home Page")
})

app.get("/user", (req, res) => {
  res.send("User Page")
})
app.listen("80", () => {
  console.log("htpp://127.0.0.1")
})
