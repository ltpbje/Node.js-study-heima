const express = require("express")
// 导入 express 模块

const app = express()
// 创建一个 express 应用

// 调用 express.static() 方法，指定静态资源目录
app.use(express.static("./clock"))
app.use("/files", express.static("./files"))

app.listen(80, (req, res) => {
  // 使用 app.listen 监听 80 端口，并打印启动信息
  console.log("express server running at http://127.0.0.1")
})
