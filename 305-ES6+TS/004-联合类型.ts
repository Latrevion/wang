// 联合类型
function f(): string | number {
  return Math.random() > 0.5 ? 1 : 'abc';
}


let n12: string | number;
n12 = 'wang';
console.log(n12.length);
n12 = f();
// console.log(n12.length)


// function f(): string | number {
//     return Math.random() > 0.5 ? 1 : 'abc';
// }
//
//
// let n12: string | number;
// n12 = 'wang';
// console.log(n12.length);
// n12 = f();
// // console.log(n12.length);
