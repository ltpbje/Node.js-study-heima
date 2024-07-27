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
  path.join(__dirname, "/素材/index.html"),
  "utf8",
  function (err, dataStr) {
    // 2.2 读取HTML文件失败
    if (err) return console.log("读取HTML文件失败!" + err.message)
    // 2.3读取文件成功后，调用对应的三个方法，分别拆解出css，js，html文件
    resolveCss(dataStr)
    resolveJs(dataStr)
    resolveHTML(dataStr)
  }
)

// 3.1定义处理css样式的方法
function resolveCss(htmlStr) {
  // 3.2使用正则提取需要的内容
  const r1 = regStyle.exec(htmlStr)
  // 3.3将提取出来的样式字符串，进行字符串的replace替换操作
  const newCSS = r1[0].replace("<style>", "").replace("</style>", "")
  // 3.4调用fs.writeFile（）方法，将提取的样式，写入到clock目录中index.css的文件里面
  fs.writeFile(
    path.join(__dirname, "./clock/index.css"),
    newCSS,
    function (err) {
      if (err) return console.log("写入CSS样式失败!" + err.message)
      console.log("写入CSS样式文件成功!")
    }
  )
}

// 4.1定义处理js脚本的方法
function resolveJs(htmlStr) {
  // 4.2 通过正则，提取对应的<script></script>标签内容
  const r2 = regScript.exec(htmlStr)
  // 4.3将提取出来的样式字符串，进行字符串的replace替换操作
  const newJs = r2[0].replace("<script>", "").replace("</script>", "")
  // 4.4调用fs.writeFile（）方法，将提取的结果，写入到clock目录中index.js的文件里面
  fs.writeFile(path.join(__dirname, "./clock/index.js"), newJs, function (err) {
    if (err) return console.log("写入js失败!" + err.message)
    console.log("写入js文件成功!")
  })
}

// 5.1定义处理HTML结构的方法
function resolveHTML(htmlStr) {
  // 5.2将字符串调用replace方法，把内嵌的style和script标签，替换为外联的link和script标签
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css"/>')
    .replace(regScript, '<script src="./index.js"></script>')
  // 5.3写入index.html这个文件
  fs.writeFile("./clock/index.html", newHTML, function (err) {
    if (err) return console.log("写入HTML文件失败!", err.message)
    console.log("写入HTML文件成功")
  })
}
