// 导入数据库操作模块
const db = require("../db/index")

// 根据分类的状态，获取所有未被删除的分类列表数据
// is_delete 为 0 表示没有被 标记为删除 的数据
const sql = "select * from ev_article_cate where is_delete = 0 order by id asc"

// 获取文章分类列表数据的处理函数
exports.getArticleCates = (req, res) => {
  db.query(sql, (err, results) => {
    // 1. 执行 SQL 语句失败
    if (err) return res.cc(err)

    // 2. 执行 SQL 语句成功
    res.send({
      status: 0,
      message: "获取文章分类列表成功!",
      data: results,
    })
  })
}

// 新增文章分类的处理函数
exports.addArticleCates = (req, res) => {
  // 定义查询 分类名称 与 分类别名 是否被占用的 SQL 语句
  const sql = "select * from ev_article_cate where name = ? or alias = ?"
  // 执行查重操作
  db.query(sql, [req.body.name, req.body.alias], (err, results) => {
    if (err) return res.cc(err)
    // 判断 分类名称 和 分类别名 是否被占用
    //4.1判断数据的length
    if (results.length === 2)
      return res.cc("分类名称和分类别名分别被占用 请更换后重试")
    if (results.length === 1 && results[0].name === req.body.name)
      return res.cc("分类名称被占用 请更换后重试")
    if (results.length === 1 && results[0].alias === req.body.alias)
      return res.cc("分类别名被占用 请更换后重试")
    if (
      results.length === 1 &&
      results[0].alias === req.body.alias &&
      results[0].name === req.body.name
    )
      return res.cc("分类名称和分类别名分别被占用 请更换后重试")

    //TODO：分类名称和分类别名都可用，执行添加的动作
  })
}
