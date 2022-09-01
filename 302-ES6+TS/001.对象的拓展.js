// 1. 属性的简洁表达方式
//    属性名就是变量名，属性值就是变量值
//    属性名就是变量名，属性值就是变量值
// let a = 1
// let b = 2

// var obj = {
//   a: a,
//   b: b
// }

// let obj = {
//   a, b
// }


// console.log(obj)
//
// function f(x ,y) {
// return {
//   x:x,
//   y:y
// }


//   return {x, y}
// }
// console.log(f(1,2))


// 2. 成员函数的简洁表达方式
// var obj = {
//   // f:function () {
//   //   console.log('hello world!')
//   // }
//
//   f(){
//     console.log('hello world!')
//   }
// }
// obj.f()


// 应用 JS模块化
//a.js
// let a = 5
//
// function f1() {}
//
// function f2() {}
//
// let module = {}
// module.exports = {
//   a: a,
//   f1: f1,
//   f2: f2
// }

// module.exports = {a, f1, f2}


// 3. 属性名表达式: ES5只有访问的时候可以用属性名表达式，ES6里，定义的时候也可以。
//    变量值当属性名，所以不可以使用简洁表达方式
//    变量值不是string?
//
// let a = "abc"
// let [a1,a2] =['a','bc']
//
//
//
// let obj = {
//   // abc: 1
//   // [a]:1
//   // [a1+a2]:1
//
// }
//
// console.log(obj.abc)
// console.log(obj[a])
// console.log(obj[a1+a2])


// 4. Object.is
// 唯一一个提供了两个值是否相等的函数
//     == 烂好人
//     ===

// console.log(+0 === -0)
// console.log(NaN === NaN)

// console.log(Object.is(+0, -0))
// console.log(Object.is(NaN, NaN))
// console.log(Object.is({}, {}))

// 5. Object.assign()
// 只会拷贝本身的，不会拷贝prototype上的属性
// 如果有同名的属性，后面的会覆盖前面的
// target如果不是对象，是string，number或者boolean，会先转化为包装类
// 如果target是undefined,null，无法转化为包装类，那么报错
// 如果source不是对象，只有是string，可以计算，否则没有影响。
// Object.assign的拷贝是浅拷贝，不是深拷贝

// let target = {a: 1}
// let source1 = {
//   abc: 25,
//   cde: 27
// }
//
// let source2 = {
//   abc:27,
//   x: 17,
//   y: "abc"
// }
// source1.__proto__.b = 5
// console.log(source1.b)
// console.log(Object.assign(target, source1, source2))
// console.log(target)
// console.log(Object.assign(2, source1, source2))
// console.log(Object.assign({}, 'abc', 123,true))

// let target = {
//   a: 1,
//   b: {x: 5, y: 7}
// }
//
// let source = {
//   b: {
//     z: 9,
//     h: 51
//   }
// }

// console.log(Object.assign(target, source))
// console.log(Object.assign(target.b, source.b))
// console.log(target)

// 应用1： 用于构造函数
// class Point {
//   constructor(x, y) {
//     // this.x = x
//     // this.y = y
//     Object.assign(this,{x, y})
//
//   }
// }

// console.log(new Point(1,2))

// 应用2：在原型上添加函数
// Point.prototype.f =function () {
//   console.log('I am f!')
// }

// Object.assign(Point.prototype,{
//   f() {
//     console.log('I am f!!')
//   }
// })
//
// let p =new Point(1,22)
// p.f()

// 应用3： 为属性指定默认值
// 函数参数的默认值，不能用对象解构赋值的时候。
// const PARAMS_DEFAULT ={
//   x:0,
//   y:0,
//   z:0
// }
//
//
// function f(params) {
//   params = Object.assign({},PARAMS_DEFAULT,params)
//   console.log(params)
// }
//
// let obj = {x:5,y:3}
//
// f(obj)


// 6. Object.entries(), Object.keys(), Object.values()

// let obj ={
//   a:1,
//   b:2,
//   c:3
// }
//
// for (let key of Object.keys(obj)){
//   console.log(key)
// }
//
// for (let value of Object.values(obj)){
//   console.log(value)
// }
//
// for (let [key,value]of Object.entries(obj)){
//   console.log(key ,value)
// }


// 7. 对象的扩展运算符
// let {a,...args} ={a:1,b:2,c:3,d:4}
// console.log(args)
//
// let z = {a:1,b:2}
// let n = {c:3,...z}
// console.log(n)
//
// console.log(Object.assign({c:3}, z))

let target = {a: 1};
let source1 = {
  abc: 25,
  cde: 27
};

let source2 = {
  abc: 27,
  x: 17,
  y: 'abc'
};

target = {...target,...source1,...source2}
console.log(target)