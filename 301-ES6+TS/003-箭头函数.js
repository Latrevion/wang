// 箭头函数
// 1. 有且只有一个参数，且只有一句返回
// var f1 = function (a) {
//   return a
// }
//
// let f2 = a => a + 1
//
// console.log(f2(5))

// 2. 没有参数，且只有一句返回
// var f1 =function () {
//   return 25
// }
// let f2=()=>25
// console.log(f2())


// 3. 多于一个参数，且只有一句返回
// var f1 =function (a,b,c) {
//   return a+b+c
// }
//
// let f2= (a,b,c)=>a+b+c
// console.log(f2(1,2,3))


// 4. 如果有多条语句
// var f1 = function (a, b) {
//   var c = 0
//   c += a * a
//   c += b * b
//   c = Math.sqrt(c)
//   return c
// }
//
// let f2 = (a, b) => {
//   let c = 0
//   c += a * a
//   c += b * b
//   c = Math.sqrt(c)
//   return c
// }
//
// console.log(f2(3, 4))

// // 特例
// var f11 =function (a,b) {
//   return {a:a, b:b}
// }

// // 如果直接返回一个对象，那么大括号外面要有小括号
// let f21 = (a,b)=>({a:a, b:b})
// console.log(f21(1, 2))


// 5. 箭头函数和解构赋值的结合使用
// var f1 = function ({a, b}) {
//   var c = Math.sqrt(a * a + b * b)
//   return c
// }
//
// var obj = {a: 3, b: 4}
// // console.log(f1(obj))
//
// let f2 = ({a,b}) => {
//   let c = Math.sqrt(a * a + b * b)
//   return c
// }
// console.log(f2(obj))

// 应用
// console.log([1, 2, 3].map(function (x) {
//   return x * x
// }))

// console.log([1, 2, 3].map(x => x * x))

// console.log([1, 5, 2, -3].sort(function (a, b) {
//   return a - b
// }))

// console.log([1, 5, 2, -3].sort((a, b) => a - b))

// 6. rest 参数
// let [a, ...args] = [1, 2, 3, 4]
// console.log(args)
//
// function f1(a,...args) {
//   return args
// }
//
// console.log(f1(1, 2, 3, 4))
//
// console.log(((a, ...args)=>args)(1,2,3,4,))

// 关于箭头函数要注意的几个语法特性
// 7. 箭头函数的this是在定义时确定的，不是在调用时确定
// function f() {
//   setTimeout(function () {
//     console.log(this.id)
//   },1000)
// }

// function f() {
//   setTimeout(()=>{console.log(this.id)},1000)
// }
// let obj = {id:1}
// // f.call(obj)
// f(obj)

// 8. 箭头函数不可以作为构造函数，否则会抛出错误。

// let f2=()=>{
//   this.a =1
//   this.b =2
// }
//
// let a =new f2()

// 10. 嵌套的箭头函数： 箭头函数内还能定义箭头函数
//   管道机制（pipeline）
// function f1(...args1) {
//   console.log(args1)
//   return {f2: function(...args2) {
//       console.log(args2)
//       return {f3:function (...args3) {
//           console.log(args3)
//         }}
//     }}
// }

// let f1 =(...args1)=>{
//   console.log(args1)
//   return {f2:(...args2)=>{
//       console.log(args2)
//       return {f3:(...args3)=>{
//           console.log(args3)
//         }}
//     }}
// }
//
//
//
// var c =f1(1,2,3).f2(4,5,6).f3(7,8,9)


