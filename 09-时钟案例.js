// 1.1导入fs模块，用于操作文件系统
const fs = require("fs")
// 1.2导入path模块，用于处理文件路径
const path = require("path")

// 1.3定义正则表达式，分别匹配<style></style>和<script></script>标签

// 匹配以<style>开头，中间包含任意字符（包括空格、制表符、换行符等）零次或多次，以</style>结尾的标签
const regStyle = /<style>[\s\S]*<\/style>/
// 匹配以<script>开头，中间包含任意字符（包括空格、制表符、换行符等）零次或多次，以</script>结尾的标签
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 调用fs.readFile（）方法读取文件
fs.readFile(
  path.join(__dirname, "../素材/index.html"),
  "utf8",
  function (err, dataStr) {
    // 2.2 读取HTML文件失败
    if (err) return console.log("读取HTML文件失败!" + err.message)
    // 2.3读取文件成功后，调用对应的三个方法，分别拆解出css，js，html文件
  }
)
