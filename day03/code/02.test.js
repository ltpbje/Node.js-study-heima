const heima = require("./heima-tools")

// 格式化时间的功能
const dtStr = heima.dateFormat(new Date())
console.log(dtStr)

// 转义HTML的方法
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = heima.htmlEscape(htmlStr)
console.log(str)

// 还原HTML的方法
const str1 = heima.htmlUnEscape(str)
console.log(str1)
