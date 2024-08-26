// 导入express模块;
const express = require("express")
// 创建路由对象
const router = express.Router()
// 导入用户信息的处理函数模块
const userinfo_handler = require("../router_handlers/userinfo")
//1.导入验证数据的中间件
const expressJoi = require("@escook/express-joi")
//2.导入需要的验证规则对象
const { update_userinfo_schema } = require("../schema/user")

// 获取用户的基本信息
router.get("/userinfo", userinfo_handler.getUserInfo)
// 更新用户的基本信息
router.post(
  "/userinfo",
  expressJoi(update_userinfo_schema),
  userinfo_handler.updateUserInfo
)
// 更新用户的密码
router.post("/updatepwd", userinfo_handler.updatePassword)

// 向外共享路由对象
module.exports = router
