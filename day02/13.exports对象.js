// console.log(exports)
// console.log(module.exports)

// console.log(exports === module.exports)
// -----------------------------------------------

// const username = "zs"

// module.exports.username = username

// exports.age = 12

// exports.sayHello = function () {
//   console.log("大家好")
// }

// // { username: 'zs', age: 12, sayHello: [Function (anonymous)] }

// --------------------------------------------------
//最终，向外共享的结果，永远都是module.exports所指向的对象

// --------------------------------------------------

// module.exports.username = "zs"
// exports = {
//   gender: "男",
//   age: 22,
// }
// // { username: 'zs' }

// --------------------------------------------------

// --------------------------------------------------

// exports.username = "zs"
// module.exports = {
//   gender: "男",
//   age: 22,
// }
// // { gender: '男', age: 22 }
// --------------------------------------------------
