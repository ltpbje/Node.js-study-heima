// 引入 Node.js 的内置模块 'path'，用于处理文件和目录的路径
const path = require("path")
const fs = require("fs")
// /注意：../会抵消前面的路径

// const pathStr = path.join("/a", "/b/c", "../../", "./d", "e")
// console.log(pathStr)

// 使用 fs.readFile 函数读取文件内容
fs.readFile(
  // 使用 path.join 函数拼接当前目录（__dirname）和文件路径，组成完整的文件路径
  path.join(__dirname, "./files/1.txt"),
  // 指定文件编码为 utf-8，以确保正确读取和处理文本文件内容
  "utf-8",
  // 读取文件后的回调函数，用于处理成功读取或遇到错误时的操作
  function (err, dataStr) {
    // 如果发生错误，err 对象将包含错误信息，通过 err.message 获取错误消息并输出
    if (err) {
      return console.log(err.message)
    }
    // 如果没有遇到错误，即文件内容成功读取，将其作为 dataStr 参数传入回调函数，并输出到控制台
    console.log(dataStr)
  }
)
