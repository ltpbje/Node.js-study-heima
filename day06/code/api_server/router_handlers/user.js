exports.regUser = (req, res) => {
  // 接收表单数据
  const userinfo = req.body
  console.log(userinfo)

  // 判断数据是否合法
  if (!userinfo.username || !userinfo.password) {
    return res.send({
      status: 1,
      message: "用户名或密码不能为空",
    })
  }
  res.send("reguser OK")
}
exports.login = (req, res) => {
  res.send("login OK")
}
