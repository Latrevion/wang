// // 元组
let p: [string, number] = ['wang', 25];

p[0] = 'abc';
p[1] = 17;

// p[0]=true
p = ['abc', 123];

p.push('cde')
console.log(p);
// p.push(true)


// let p: [string, number] = ['隔壁王校长', 25];
//
// // 对应的位置上放入固定的类型
// p[0] = 'abc';
// p[1] = 17;
//
// // p[0] = true;
// // 使用下标的方式，可以只对其中一项赋值
// // 但是对对象变量赋值时，必须是全的，而且类型不能错。
//
// p = ['abc', 111];
//
// // 元素越界
// // 元组中可以放入更多的元素，放入的元素必须是元祖中已经允许的类型
// p.push('cde');
// // p.push(true);
// console.log(p);