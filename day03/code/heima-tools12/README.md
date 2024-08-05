## 安装

```
npm install heima-tools12
```

## 导入

```js
const itheima = require("heima-tools12")
```

## 格式化时间

```js
// 调用dateFormat对时间进行格式化
const dtStr = heima.dateFormat(new Date())
// 结果2020-04-03 17:20:58
console.log(dtStr)
```

## 转义 HTML 中的特殊字符

```js
// 带转换的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123 </span></h1>'
// 调用htmlEscape方法进行转换
const str = heima.htmlEscape(htmlStr)
//转换的结果 <h1 title="abc">这是h1标签<span>123 </span></h1>
console.log(str)
```

## 还原 HTML 中的特殊字符

```js
// 还原HTML的方法
const str1 = heima.htmlUnEscape(str)
// 输出的结果 <h1 title="abc">这是h1标签<span>123 </span></h1>
console.log(str1)
```

## 开源协议

ISC
