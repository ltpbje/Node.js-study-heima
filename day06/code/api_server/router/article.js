// 导入express模块;
const express = require("express")
// 创建路由对象
const router = express.Router()
const article_handler = require("../router_handlers/article")

// 发布新文章
router.post("/add", article_handler.addArticle)
// 向外共享路由对象
module.exports = router
