const path = require("path")

// 定义文件的存放路径
const fpath = "a/b/c/index.html"

// 获取路径中的文件名
const fullName = path.basename(fpath)

// 打印文件名
console.log(fullName)

// 获取文件名，去掉扩展名
const nameWithoutExt = path.basename(fpath, ".html")

// 打印去掉扩展名的文件名
console.log(nameWithoutExt)
