const express = require("express")
const router = express.Router()
// 在这里挂载对应的路由
router.get("/get", (req, res) => {
  // 通过req.query获取客户端通过查询字符串，发送到服务器的数据
  const query = req.query
  // 调用res.send（）方法，向客户端响应处理的结果
  res.send({
    status: 0, // 0表示处理成功，1表示处理失败
    msg: "GET 请求成功!", // 状态的描述
    data: query, // 需要响应给客户端的数据
  })
})
module.exports = router
