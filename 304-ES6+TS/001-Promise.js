// 1. Promise.resolve()
// 1.1 Promise.resolve(原始类型)
//     返回值，一个新的Promise对象，fulFilled, 原始类型作为data返回

// let p = Promise.resolve("hello")
// p.then(data => console.log(data))
//
// let p1 = new Promise(resolve => {
//   resolve("hello")
// })
// p1.then(data => console.log(data))

// 1.2 Promise.resolve(promise对象)
// 返回值：就是传入的Promise对象
// let p = new Promise(resolve => {
//   resolve("hello")
// })
//
// let p1 = Promise.resolve(p)
// console.log(p1 === p)


// 1.3 Promise.resolve(thenable对象)
// thenable 对象，有一个then函数，其实是executor
// 返回值：使用then函数作为executor，初始化一个新的Promise对象
// let thenable = {
//   then(resolve, reject) {
//     resolve("hello")
//   }
// }
//
// let p = Promise.resolve(thenable)
// p.then(data => console.log(data))


// 1.4 Promise.resolve(非thenable对象)
//返回值，一个新的Promise对象，fulFilled, 非thenable对象作为data返回
// let notThenable = {
//   notThen(resolve, reject) {
//     resolve("hello")
//   }
// }
//
// let p = Promise.resolve(notThenable)
// p.then(data => console.log(data))


// 2. Promise.reject()
//返回值，一个新的Promise对象，rejected, 数据返回
// let p = Promise.reject("hello")
// p.catch(reason => console.log(reason,p))


