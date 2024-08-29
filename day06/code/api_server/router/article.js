// 导入express模块;
const express = require("express")
// 创建express的服务器实例;
const router = express.Router()
// 导入文章分类的路由处理函数模块
const artcate_handler = require("../router_handlers/artcate")

// 获取文章分类的列表数据
router.get("/cates", artcate_handler.getArticleCates)

// 向外共享路由对象
module.exports = router
