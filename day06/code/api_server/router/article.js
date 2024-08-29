// 导入express模块;
const express = require("express")
// 创建express的服务器实例;
const router = express.Router()

// 发布新文章
router.post("/add", (req, res) => {
  res.send("ok")
})

// 向外共享路由对象
exports = router
