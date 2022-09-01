// Map <-> Object, key-value 键值对
// 1. Map 定义
// 1. Map 定义
// let obj = {}
//
// obj.a = 5
// obj.a = 4
// obj.b = 3
//
// //a 4,b 3
// // // 对象本身，是一个键值对的容器
// // // Map和Object的区别是什么？
// // // Object的键必须是字符串，Map中没有这个要求
// let m =new Map()
// m.set('a',5)
// m.set('a',4)
// m.set('b',3)
// m.set(obj,7)
// console.log(m)
// console.log(m.get("a"))
// console.log(m.get(obj))


// 2. Map的构造
// 2.1 嵌套的二维数组来构造Map
// let array = [
//   ["a", 4],
//   ["b", 3]
// ]
//
// let m = new Map(array)
// console.log(m)
//
// // 2.2 嵌套数组的Set来构造Map
// let s = new Set(array)
// let m2 =new Map(s)
// console.log(m2)


// 2.3 key的碰撞（clash）
// == === Object.is
// -0 === +0 特例，NaN使用Object.is; 引用类型，看地址

// let m = new Map()
// m.set(-0,1)
// m.set(+0,2)
// console.log(m)
//
// m.set(NaN, 3)
// m.set(NaN, 4)
// console.log(m)
//
// // m.set([],5)
// // m.set([],6)
//
// let a=[]
// m.set(a, 5)
// m.set(a, 6)
// console.log(m)


// 3. Map实例的属性和成员方法
// 3.1 size
// let m = new Map([['a',4],['b',5]])
// console.log(m.size)


// // 3.2 set(key, value), get(key)
// // 3.3 has(key)
// console.log(m.has('a'))
// console.log(m.has('c'))

// // 3.4 delete(key)
// console.log(m.delete("a"))
// console.log(m)
// console.log(m.delete('c'))
// console.log(m)


// // 3.5 clear()
// m.clear()
// console.log(m)


// 4. Map实例的遍历
//keys,values,entries()
let m = new Map([["a", 4], ["b", 5]])

// for (let key of m.keys()) {
//   console.log(key)
// }
//
// for (let value of m.values()) {
//   console.log(value)
// }

// for (let entry of m.entries()) {
//   console.log(entry[0], entry[1])
// }

// for (let [key,value] of m.entries()){
//   console.log(key, value)
// }
//

// for (let [key, value] of m) {
//   console.log(key, value)
// }


//forEach
// m.forEach((value,key,map)=>{
//   console.log(key, value)
// })


// 5. Map 和 Array之间的互相转换
// 5.1 Map 转化为 Array(嵌套的二维数组)
// let a = [...m.entries()]
// console.log(a)


// 5.2 Array 转化为 Map

// 6. Map转化为数组，然后遍历
//map
//filter
//Array.from

// let a2 = [...m].map(([key, value]) => [key, value * value])
// let m2 =new Map(a2)
// let m2 =new Map([...m].map(([key, value]) => [key, value * value]))
// console.log(m2)

// let a2 = [...m].filter(([key, value]) => value > 4)
// let m2 =new Map(a2)
// console.log(m2)


// let a2 = Array.from(m, ([key,value]) => [key, value * value])
// let m2 = new Map(a2)
// console.log(m2)


// 7. 当Map的key都是字符串的时候，如何实现Object和Map之间的相互转化
// 7.1 Map 转化为对象
function map2Obj(map) {
  let obj = {}
  for (let [key, value] of map) {
    obj[key] = value
  }
  return obj
}
let obj =map2Obj(m)
console.log(obj)

// 7.2 对象转化为Map
function obj2Map(obj) {
  let map = new Map()
  for (let key of Object.keys(obj)){
    map.set(key, obj[key])
  }
  return map
}
let  m2 =obj2Map(obj)
console.log(m2)