// 应用模块的
// import {a, f1} from "./a.mjs"
// console.log(a)
//
// f1()

// import * as A from "./a.mjs"
//
// console.log(A.a)
// A.f1()
//
// A.a.a1 = 17
// console.log(A.a)


//default
// import  wang from './a.mjs'
//
// console.log(wang)

import ffff,{a, f1} from './a.mjs'
ffff()
console.log(a)
f1()


// 此处的文件名，如果后缀名是js或者是mjs，可以省略

// import 和 export是静态过程
// 变量提升
// console.log(a);
// import {a, f1} from './a';

// import * as A from './a';

// console.log(A.a);
// A.f1();

// // 对于A而言，不允许引入新的变量，也不允许修改其中的值。
// // A.b = 7;
// // A.f1 = function(){
// //     console.log('b');
// // }
// // A.a = 7;
// A.a.a1 = 17;
// console.log(A.a);

// default

// 变量
// import wangxiaozhang from './a';
// console.log(wangxiaozhang);

// 函数
// import fff from './a';
// fff();

// import fff, {a, f} from './a';
// console.log(a);
// f();
// fff();

