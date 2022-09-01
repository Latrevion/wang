//ES6 Set 《=》 Array
// Set中放入的值或者是对象都必须是唯一
// 1. Set成员的唯一性
// let s = new Set()

// s.add(1)
// s.add(2)
// s.add(2)
// console.log(s)

//应用
//
// let a =[1,2,3,3,4,4]
// a.forEach(x => s.add(x))
// console.log(s)


//2.从Array =》Set   Set的初始化
//2.1从数组变成Set
// let a = [1, 2, 3, 3, 4, 4]
// let s = new Set(a)
// console.log(s)

//2.2 从类数组变成Set 从类数组 变成 数组 再变成 Set
//自定义类数组，NodeLIst，arguments
// function f() {
//   // return Array.from(arguments)
//   return [...arguments]
// }
//
// let s = new Set(f(1,2,3,3,4,4))
// console.log(s)

//3.从Set -》 Array
// const s = new Set([1, 2, 3, 4])
//
// //3.1 拓展表达式
// let a = [...s]
// console.log(a)
//
// //3.2 Array.from
// let a2 = Array.from(s)
// console.log(a2)

//应用1,数组去重
// let a = [1, 2, 3, 3, 4, 4]
// a = [...new Set(a)]
// console.log(a)
//
// //== 烂好人  ===   Object.is
// //Set  === 特例： NaN用的是Object.is
// let s = new Set()
// // s.add(+0).add(-0)
// // s.add(NaN).add(NaN)
// // s.add({}).add({})
// let o = {}
//
// s.add(o).add(o)
//
// console.log(s)

//4.Set实例的属性和方法
//add(value)，返回Set实例
//delete(value),删除成功返回true，失败返回false
// has(value),是否包含某个值
//clear()清除所有成员
//size:一共有多少个成员


// const s = new Set([1, 2, 3])
//
// s.delete(3)
// console.log(s, s.size)
// console.log(s.has(1))
// console.log(s.has(4))
// s.clear()
// console.log(s, s.size)

//5.Set的遍历
//keys(),values(),entries()
//forEach(function)
// let s = new Set([1, 2, 3])
// for(let item of s.keys()){console.log(item)}
//
// for(let item of s.values()){console.log(item)}
//
// for(let item of s.entries()){console.log(item)}

//我们推荐使用的
//for of  Set简单写法，替代了values
// for (let item of s) {
//   console.log(item)
// }
//
// //forEach没有返回值（处理函数，this）
// s.forEach((value, key) => console.log(value * 2))


//数组：
//map(function)：               把数组内的元素，全部拿出来给用于function运算，然后生成新的数 ，形成数组
//filter(function)             把数组内的元素，全部拿出来给用于function运算，如果true，进入数组，如果false，就不进入数组。
//Array.from(set,function,this)

//应用1，把set中的数字 x2
// let s = new Set([1, 2, 3])
// let s2 = new Set([...s].map(x => x * 2))
// console.log(s2)

//应用2
// let s1 = new Set([1, 2, 3])
// let s2 = new Set([2, 3, 4])
//
// //生成并集 Union
// let su = new Set([...s1, ...s2])
// console.log(su)
//
// //生成交集 Intersect
// let si = new Set([...s1].filter(x => s2.has(x)))
// console.log(si)
//
// // // 生成差集 Difference s1 - s2
// let diff = new Set([...s1].filter(x=>!s2.has(x)))
// console.log(diff)

// 应用3， 把set中的数值 * 2
// let s = new Set([1, 2, 3])
// let s2 = new Set(Array.from(s, x =>x*2))
// console.log(s2)
