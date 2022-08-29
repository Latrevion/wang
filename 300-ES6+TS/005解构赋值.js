//// 数组的解构赋值
// // 1. 简单的
// let a = 5
// let b = 3
// let c = 2

// let [a,b,c] =[1,2,3]
// console.log(a, b, c)

// 2. 复杂的
// let [a,[[b],c]] =[1,[[2],3]]
// console.log(a, b, c)

// let array =[1,[[2],3]]
// let [a,[[b],c]] =array
// console.log(a, b, c)


// 3. 多个变量
// 变量少，给的数据多
// let [,,third] =[1,2,3]
// // console.log(third)
// let array = [1, [[2], 3]]
// let [, [[b], ]] = array
// console.log(b)

// let [head,...tail] = [3,11,2,5]
// console.log(head, tail)

// 变量多，给的数据少
// let [a,b,c] =[1,2]
// console.log(c)

// 4. 默认值
// let [a, b, c = 0] = [1, 2,3]
// console.log(c)


//es5
// c =c ||0

// 5. 是否赋值默认值，是根据变量值是否是 === undefined
// let [a, b, c = 0] = [1, 2,undefined]
// console.log(c)

// 6. 是否给默认值，是根据变量值是否是 === undefined， 如果值 !== undefined, 就解构赋值。
// let [a, b, c = 0] = [1, 2,null]
// console.log(c)


// 7. 小心 TDS
//默认值可以是函数(懒调用)，可以是变量
// function f() {
//   return 1
// }
// let [a=f()] = [10]

// let y =5
//
// let [a=5] = []
// console.log(a)

// let [x=5,y=x]=[]
// console.log(x, y)

// 8. 对象的解构赋值
// // 按照key
// let {b,a} ={
//   a:3,
//   b:4
// }
//
// console.log(a, b)

// let {b:b,a:a} ={
//   a:3,
//   b:4
// }
//
// console.log(a, b)


// 9. let { 匹配:变量 }
//    let {变量} == let {同名匹配:变量}

// let {b: b2, a: a1} = {
//   a: 3,
//   b: 4
// }
//
// console.log(a, b)
// console.log(a1, b2)

// 10. 更复杂的对象解构赋值
// let obj = {
//   p: [
//     "hello",
//     {y: "World"}
//   ]
// }

// let {p:[x,{y:y2}]} = obj
// // 问题1，哪些是匹配，哪些是变量？
// console.log(x, y2)
// // console.log(p, y) //报错

// 可以多次匹配
// let {p: p, P: [x, {y}]} = obj
// console.log(p, x, y)

// let obj = {x: 5}
// let {x: x1, x: x2, x: x3} = obj
// console.log(x1, x2, x3)

// 例子：
// let obj ={
//   loc:{
//     start:{
//       line:1,
//       column:5
//     }
//   }
// }
//
// let {loc,loc:{start},loc:{start:{line}}} =obj
// console.log(loc, start, line)

// 11.对象解构可以有默认值
// let {x=3} ={}
// console.log(x)


// 特例
// let  a
// [a] =[5]
// console.log(a)
//
//
// let b
// ({b}={b:5})
// console.log(b)

//12.把数组当对象
// let array =[1,2,3]
// let {0:a,0:a2,1:b,2:c} = array
// console.log(a,a2, b, c)


// 13. 字符串的解构赋值
// let [a,b,c]= '123'
// console.log(a, b, c)


// 14. 包装类 string, number, boolean
// let {toString:s} =123
// console.log(s === Number.prototype.toString)
// console.log(s)


// 15. 函数参数的解构赋值
// function join([a,b]) {
//   return a+b
// }
//
// console.log(join(["hello", " world!"]))

//// 参数的解构赋值也可以使用默认值
// function f({a=0,b=0}={}) {
//   console.log(a, b)
// }
//
// f({a:3,b:4})
// f({a:3})
// f({})
// f()


// 16. 解构赋值的常用方法：
// 16.1, 交换两个变量
//;
// let [x,y] =[1,2];
// [x , y]=[y, x];
// console.log(x, y);


// 16.2 函数返回一个数组或者对象，需要处理
// function f() {
//   return [1,2,3]
// }
//
// let  [x,y,z] =f()
// console.log(x, y, z)

// 16.3 给函数传递参数
// function f(a,b,c) {
//   console.log(a, b, c)
// }
//
// f(1,2)
// f(null,1,2)

// function f({a,b,c}) {
//   console.log(a, b, c);
// }
// f({a:1,b:2});
// f({b:2,c:3});
//
//
//
// function f2([a,b,c]) {
//   console.log(a, b, c);
// }
// f2([1,2,]);
// f2([,2,3]);

// 16.4 JSON文件的处理


// 16.5 给函数的参数设定默认值
// function f({a = 0, b = 0} = {}) {
//   console.log(a, b)
// }


// 16.6从模块或者API中获得变量或者函数
const {PI:PI,cos,sin} =Math
console.log(PI, cos, sin)
console.log(PI/2)
console.log(PI/4)


// const {xxx,yyy} =require('module-name')