//在一个自定义模块中，默认情况下，module.exports ={}
const age = 20
//向module.exports对象上挂载username属性
module.exports.username = "zs"
//向module.exports对象上挂载sayHello方法
module.exports.sayHello = function () {
  console.log("Hello")
}
module.exports.age = age

// 让module.exports指向一个全新的对象
module.exports = {
  nickName: "小黑",
  sayHi() {
    console.log("Hello")
  },
}
