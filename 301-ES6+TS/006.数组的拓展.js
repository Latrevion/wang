//1.扩展运算符
// let [a,...args] = [1,2,3,4]
// console.log(args)
//
// let f = (a,...args) =>{console.log(args)}
// f(1,2,3,4)
//
// console.log(...[1,2,3])
// console.log(1, 2, 3)
//
//
//
// console.log(1,...[2, 3, 4], 5)
//
// console.log(1,...[],3)


// 2. ...很多使用用于替代apply
// function f() {
//   console.log(arguments)
// }
// let args =[3,4,5]
// // f.apply(null,args)
//
// f(...args)

// 应用1
// let a = [1,2,3]
// console.log(Math.max(1, 3, 5))
// console.log(Math.max.apply(null, a))
// console.log(Math.max(...a))

// 应用2
// let arr1 = [0, 1, 2]
// let arr2 = [3, 4, 5]
// console.log(arr1.concat(arr2))
// console.log([...arr1,...arr2])

// Array.prototype.push.apply(arr1,arr2)
// console.log(arr1)

// arr1.push(...arr2)
// console.log(arr1)


// 3. 扩展的变量必须是最后一个，否则报错。
// let [a,...b ,c] = [1, 2, 3, 4]


// 4. 对字符串使用扩展运算符
// console.log(..."hello")
//
// let [a,b,c,d,e ] ='hello'
// console.log(a, b, c, d, e)

// console.log('hello'.split(''))


// 5. Array.from  把类数组转化成数组
//自定义类数组
// let arrayLike ={
//   '0':'1',
//   '1':'25',
//   '2':'abc',
//   length:3
// }
//
// let array = [].slice.call(arrayLike)
// let array = Array.prototype.slice.call(arrayLike)
// console.log(array)
//
//
// let array2 = Array.from(arrayLike)
// console.log(array2)

// ==> DOM NodeList  7.html
// ==> 函数的 arguments
// function f() {
//   console.log(arguments.__proto__.constructor.name)
//   console.log(arguments)
//
//   let args = Array.from(arguments)
//   console.log(args.__proto__.constructor.name)
//   console.log(args)
// }
// f(1,2,3,4)
// ==> 所有实现了iterator接口的对象
//
// let obj = {
//   "0": 1,
//   "1": 2,
//   "2": 3,
//   length: 3
// }
//
//
// let arr1 = [1, 2, 3].map(x => x * x)
//
// // let arr2 = Array.from(obj).map(x => x * x)
// let arr2 = Array.from(obj,x => x * x)
//
// console.log(arr1,arr2)


// 6. Array.of： 把零散的数据变为数组
// let a = [1, 2, 3]
// let b1 = new Array(1, 2, 3)
// let b2 = new Array(3)
// let c1 = Array.of(1, 2, 3)
// let c2 = Array.of(3)
// console.log(a, b1, b2, c1, c2)

// 7. 实例实例的find(), findIndex() 写一个回调函数
// let a  = [1,4,-3,9]
// console.log(a.find(x => x < 0))
// console.log(a.find((value,index,arr)=>{
//   console.log(value, index, arr)
//   return value <0
// }))

//
// console.log(a.findIndex((value,index,arr)=>{
//   console.log(value, index, arr)
//   return value <0
// }))

// let b = [1,4,NaN]
// console.log(b.findIndex((value,index,arr)=>{
//   console.log('dd',value, index, arr)
//   //使用NaN 与 value一一对比，然后返回出索引
//   return Object.is(NaN,value)
// }))


// 8. 数组实例的fill()
// let a =new Array(5)
// // a.fill(0)
// a.fill(0,1,3)
// console.log(a)


// 9. 数组实例的entries(), keys(), values()
//for , for in, forEach , for of
// let a =[1,2,3,4]
// for (let index of a.keys()){
//   console.log(index)
// }
//
// for (let elem of a.values()){
//   console.log(elem)
// }
//
// for (let [index,elem]of a.entries()){
//   console.log([index, elem])
// }
//
// let entries =a.entries()
// console.log(entries.next().value)
// console.log(entries.next().value)
// console.log(entries.next().value)
// console.log(entries.next().value)



// 10. 数组实例的includes()
// indexOf好的地方：1. 语义化， 2. 可以处理 NaN
let a=[1,2,5,NaN]
console.log(a.includes(2))
console.log(a.includes(10))
console.log(a.includes(NaN))



