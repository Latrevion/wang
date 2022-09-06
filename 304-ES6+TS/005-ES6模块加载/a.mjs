// 被加载的模块

// 1
// export var a = 5
//
// export function f1() {
//   console.log("in f1")
// }

//2
// var a = 5
//
// function f1() {
//   console.log("in f1")
// }
//
// export {a, f1}

// 3
// var _a = {a1: 5, a2: 3}
//
// function _f1() {
//   console.log("in f1")
// }
//
// export {_a as a, _f1 as f1}

// var a = 5
// // // export default a
// // export {a as default}

export default function () {
  console.log("hello")
}
export var a = 5

export function f1() {
  console.log('f111')
}


// export 放在变量或者是函数声明的前面

// export的第一种写法：
// export var a = 5;
// export function f1(){
//     console.log('in f1');
// }

// export的第二种写法：
// var a = 5;
// function f1(){
//     console.log('in f1');
// }

// export {a, f1};

// export的第三种写法：

// var _a = {
//     a1: 5,
//     a2: 3
// };

// function _f1(){
//     console.log('in f1');
// }

// 必须写在顶级
// export 必须保持静态
// export {
//     _a as a,
//     _f1 as f1
// };

// export default
// 1. export default只能用一次
// 2. 使用export default时，用的都是非声明状态

// 变量
// var a = 5;
// // export default a;
// export {a as default};

// 函数
// export default function(){
//     console.log('hello');
// }
//
// export var a = 5;
// export function f(){
//     console.log(123);
// }
//
//
