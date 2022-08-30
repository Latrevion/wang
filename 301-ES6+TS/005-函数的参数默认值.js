// // 1.函数参数默认值
// function f(x, y) {
//   x = x || "hello"
//   y = y || "world"
//   console.log(x, y)
// }
// f()
// f('wang')
//
// // // 两个缺陷：
// // // 1. 我们传值了，但是这个是等价于false，此时参数一会被覆盖。
// f('wang','')
// // // 2. 不利于未来代码的优化

// function f2(x='hello',y='world') {
//   console.log(x, y)
// }
// f2()
// f2('wang','')
// f2('hello1','world1')

//2.参数是不能重复声明的。
// 2.1 不能声明和形参一样的变量
// function f(x=5) {
//   const x =3
//
// }
// f()

//2.2当参数有了默认值以后，参数不能重复声明
// function f2(x,x,y=1) {
// function f2(x,x,y) {
//   console.log(x, y)
// }
// f2(3,4,5)

// 2.3 参数默认值的计算是惰性的
// let x =9
// function f(y = x+1) {
//   console.log(y)
// }
// x = 10
// f()


// 2.4 小心TDS; 分清楚哪个是形参
// function f(x = y, y) {
//   console.log(x, y)
// }
//
// f()

// let y =3
// function f(x=y) {
//   let y =5
//   console.log(x)
// }
// f()

//
// function f(x=x) {
// }

// f()

// 3. 函数的默认值与解构赋值的默认值结合使用
// function f({a=0,b=0}={a:3}) {
//   console.log(a, b)
// }
//
//
// f({a:3,b:4})
// f({a:3})
// f({})
// f()

// 4. 实参省略的方法
// function f(x , y=2,z) {
//   console.log(x, y)
// }
//
// f(3, 4)
// f(3)
// f()
//
// // // 函数调用，不能这样省略实参
// // f(, 4)
// f(undefined,4)
// // f(1, , 3)
// f(1,undefined,3)

// 5. 函数的length: 这个函数需要的必须参数的个数
// console.log((function f(a, b, c) {
//
// }).length)
//
// console.log((function f() {
//
// }).length)
//
//
// console.log((function f(a,b,c=0) {
//
// }).length)
//
// console.log((function f(a,b,c=0,d) {
//
// }).length)

// 6. 函数的name
// function f() {
//   console.log("hello")
// }
//
// console.log(f.name)
//
// let f2 =function (){
//   console.log("hello")
// }
// console.log(f2.name)
//
// console.log((f2.bind({})).name)

// 7. this绑定
//    call, apply
//    bind
//    箭头函数

let obj ={a:25}

function f(a,b) {
  console.log(this.a,a,b)
}

// f()
f.call(obj,1,2)
f.apply(obj,[1,2])
f.bind(obj)(1,2)
