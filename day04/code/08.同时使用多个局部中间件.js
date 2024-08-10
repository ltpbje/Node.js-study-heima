const express = require("express")

const app = express()

const mw1 = (req, res, next) => {
  console.log("第一个中间件")
  next()
}
const mw2 = (req, res, next) => {
  console.log("第二个中间件")
  next()
}

app.get("/", mw1, mw2, (req, res) => {
  res.send("Home Page ")
})

app.get("/user", (req, res) => {
  res.send("User Page")
})

app.listen(80, () => {
  console.log("http://127.0.0.1")
})
