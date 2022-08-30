//1.includes,startsWith,endsWith

// let s = "Hello Mr. Wang"
// console.log(s.includes("Mr"))
// console.log(s.startsWith("He"))
// console.log(s.endsWith("ng"))


//2.repeat
// let s2 = 'abc'
// console.log(s2.repeat(3))

//3.padStart ,padEnd
// 只有当前字符串位数小于要求的最小位数的时候，才补充
// let s = "x"
// console.log(s.padStart(4, "ab"))
// console.log(s.padEnd(4, "ab"))

// 应用
// 2.1. 补零
// let month = 8
// console.log(month.toString().padStart(2, "0"))


// 2.2. 日期的补齐
// YYYY-MM-DD 01 YYYY-MM-01
//            12-21 YYYY-12-21
// let s1 = '01'
// console.log(s1.toString().padStart(10, "YYYY-MM-DD"))
//
// let s2 ='12-21'
// console.log(s2.toString().padStart(10, "YYYY-MM-DD"))

// 4. 模板字符串
// <ul>
//    <li>1</li>
//    <li>2</li>
//    <li>3</li>
// </ul>

let [a, b, c] = [1, 2, 3]

// let s= '<ul>\n'+
//    '<li>'+a+'</li>\n'+
//    '<li>'+b+'</li>\n'+
//   '<li>'+c+'</li>\n'+
// '</ul>'
// console.log(s)


// 我们需要：解决多行；不要用字符串相加
// 字符串模板: 支持多行；支持使用变量；支持任何的函数表达式
function f() {
  return 15
}

let s = `<ul>
<li>${f()}</li>
<li>${a+b}</li>
<li>${c}</li>
</ul>
`
console.log(s)
