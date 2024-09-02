// 导入express模块;
const express = require("express")
// 创建express的服务器实例;
const router = express.Router()
// 导入文章分类的路由处理函数模块
const artcate_handler = require("../router_handlers/artcate")
// 导入验证数据的中间件
const expressJoi = require("@escook/express-joi")
// 导入文章分类的验证模块
// 导入删除分类的验证规则对象
const {
  add_cate_schema,
  delete_cate_schema,
  get_cate_schema,
} = require("../schema/artcate")

// 获取文章分类的列表数据
router.get("/cates", artcate_handler.getArticleCates)
// 新增文章分类的路由
router.post(
  "/addcates",
  expressJoi(add_cate_schema),
  artcate_handler.addArticleCates
)
// 删除文章分类的路由
router.get(
  "/deletecate/:id",
  expressJoi(delete_cate_schema),
  artcate_handler.deleteCateById
)
// 添加 `根据 Id 获取文章分类` 的路由
router.get(
  "/cates/:id",
  expressJoi(get_cate_schema),
  artcate_handler.getArticleById
)
// 向外共享路由对象
module.exports = router
