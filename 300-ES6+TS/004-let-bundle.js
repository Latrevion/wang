'use strict';

//ES5  只有脚本作用域和函数作用域

//块作用域 ：大括号的部分
//1.let关键字声明的变量，只在块中有效
// if(true){
//     var a=5
//     let b= 5
// }
// console.log(a)
// console.log(b)

// 2.let关键字可以防止循环变量的泄露，同时能够提供闭包
// for(var i=0;i<5;i++){
//     console.log(i)
// }
// console.log('here',5)

// for(let  i=0;i<5;i++){
//     console.log(i)
// }
// console.log('here',5)

// let a = []
// for(var i =0;i<5;i++){
//     a[i]=function(){
//         console.log(i)
//     }
// }
// a[3]()

// let a = []
// for(let i =0;i<5;i++){
//     a[i]=function(){
//         console.log(i)
//     }
// }
// a[3]()

//3. for循环是个特例，小括号是一个独立作用域，大括号是一个独立作用域
// for(let i=0;i<3;i++){
//     let i=3
//     console.log(i)
// }

//4.let不会进行变量提升
// console.log(a)
// var a =5

// console.log(a)
// let a = 5

//5.暂时性死去的概念，let不进行变量提升，他会绑定到一个块作用域
//  变量提升：var 在预编译时将变量产生，只是数值没有初始化，所以可以访问
//  绑定：let 在预编译的时候变量产生，但是，在let声明以前，不许使用，
//  从块作用域的头部到let声明之间的范围（暂时性死区 temporal dead zone:TDS），如果使用，就会产生引用错误
// let b =5
// if(true){
//     console.log(b)
//     //TDS
//     let b 
//     //undefined
//     b=3
//     //3

// }

// 6.let 不允许咋同一个作用域内重复定义
// {
//   var a =5
//   var a =5
//   console.log(a)
// }

// {
//   let b =5
//   let b =5
//   console.log(b)
// }

//7解决两种不合理的现象
// 7.1 块内的变量影响到块外
// var a = 5;
// function f(){
//     console.log(a);
//     if(true){
//         var a = 3;
//     }
// }
// f();

//7.2 循环变量的泄露
// for(var i =0;i<5;i++){
//
// }
// console.log(i)

//8.立即执行函数可以简化为一对大括号+let
// (function () {
//   var tmp = 5
// })()
//
// {let tmp = 5}
//
//
// console.log(tmp)

//9. let声明的变量：内层可以访问外层的变量，外层不能访问内层的变量，内层退出后失效
// let a = 5
// {
//
//   console.log(a)
// }
//
//
// {
//   let b = 4
//   console.log(b)
// }
// console.log(b)

// / 10. 块级作用域中的函数声明
//     ES5: 不允许在块结构中声 明函数的
//     ES6: 1. 允许在块结构中声明函数的
//          2. 函数依然有预编译，函数名会提升到全局作用域或者函数作用域的头部
//          3. 如果在块级作用域，会提升到块的头部

// function f() {
//   console.log("outside!")
// }
//
// (function () {
//   if (false){
//     function f() {
//       console.log("inside!")
//     }
//   }
//   f()
// })()

// 11.
// const 原始类型

// const  PI = 3.14
// PI =6.28

// const a = [1,2]
// a[0]=3
// console.log(a)

//12. 全局变量
var getGlobal = function getGlobal() {
  if (typeof self !== 'undefined') {
    return self;
  } else if (typeof window !== 'undefined') {
    return window;
  } else if (typeof global !== 'undefined') {
    return global;
  } else {
    throw new Error('No global found!');
  }
};
console.log(getGlobal());
