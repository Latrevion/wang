// 1. 二进制和八进制的表示方法
// let n1 =0b0101
// console.log(n1)
//
// let n2 =0o77
// console.log(n2)

// 2. parseInt, parseFloat
// console.log(Number.parseInt === parseInt)


//3.Number.isInteger()
// function myIsInteger(a) {
//   return (Math.floor(a)===a)
// }
//
// console.log(myIsInteger(1))
// console.log(myIsInteger(1.5))

//
// console.log(Number.isInteger(1))
// console.log(Number.isInteger(1.5))

//4.Number.EPSILON 最小值常量
// console.log(0.1 + 0.2)
// console.log(Number.EPSILON.toFixed(20))


//5.安全整数  Number.isSafeInteger(), Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER
// console.log(Number.isSafeInteger(5))
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1))
// console.log(Number.MAX_SAFE_INTEGER)


// Math扩展出来的API
// 6. Math.trunc() 去掉小数部分
// console.log(Math.trunc(1.5))
// console.log(Math.trunc(-1.5))

// 7. Math.cbrt() 立方根
// console.log(Math.cbrt(27))
// console.log(Math.cbrt(-27))
// console.log(Math.pow(27, 1/3))

// 8. Math.hypot() 对所有的数据求平方和然后开方
// console.log(Math.hypot(3, 4))

// 9. 对数 Math.expm1(x) => e^x - 1   e自然对数
// console.log(Math.expm1(-1))

// 10. 对数 Math.log1p(x) => log(1 + x)
// console.log(Math.log1p(1))


// 11. Math.log10() 以10为底  Math.log2() 以2为底
// console.log(Math.log10(10))
// console.log(Math.log2(2))

// 12. 双曲函数
// Math.sinh(x)  Math.cosh(x)  Math.tanh(x)
// Math.asinh(x)  Math.acosh(x)  Math.atanh(x)


// 13. 指数运算 **
console.log(Math.pow(3, 3))
console.log(3 ** 3)
