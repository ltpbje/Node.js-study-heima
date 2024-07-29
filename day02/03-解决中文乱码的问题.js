const http = require("http")
const server = http.createServer()

server.on("request", (req, res) => {
  //定义一个字符串，包含中文的内容
  const str = `你请求的URL地址是 ${req.url} ,请求的method类型为 ${req.method}`
  //为了防止中文显示乱码的问题，需要设置响应头Content-Type的值为text/html;charset=utf-8
  res.setHeader("Content-Type", "text/html; charset=utf-8")
  //res.end(）将内容响应给客户端
  res.end(str)
})

server.listen(80, () => {
  console.log("server running at http://localhost")
})
