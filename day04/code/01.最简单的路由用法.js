const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.post("/", (req, res) => {
  res.send("Post Request")
})

app.listen(80, () => {
  console.log("server start http://127.0.0.1")
})
