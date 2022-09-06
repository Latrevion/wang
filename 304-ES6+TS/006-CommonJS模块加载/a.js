// CommonJS
// 动态的，运行时加载，被加载的是一个对象

var a =5
function f(){
  console.log(" in f1")
  a++
}

module.exports ={
  get a(){
    return a
  },
  f:f
}






// var a = 5;
// function f(){
//     console.log('in f1');
//     a++;
// }
//
// module.exports = {
//     get a(){
//         return a;
//     },
//     f: f
// }