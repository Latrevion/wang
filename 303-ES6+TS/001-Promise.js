// Promise 对象
// 1. 什么是回调地狱 callback hell
// function riskyMethod1(succeedHandler, failedHandler) {
//   let r = Math.random()
//
//   if (r < 0.7) {
//     setTimeout(succeedHandler, 30)
//   } else {
//     setTimeout(failedHandler, 30)
//   }
// }
//
// function riskyMethod2(succeedHandler, failedHandler) {
//   let r = Math.random()
//
//   if (r < 0.7) {
//     setTimeout(succeedHandler, 30)
//   } else {
//     setTimeout(failedHandler, 30)
//   }
// }
//
// function riskyMethod3(succeedHandler, failedHandler) {
//   let r = Math.random()
//
//   if (r < 0.7) {
//     setTimeout(succeedHandler, 30)
//   } else {
//     setTimeout(failedHandler, 30)
//   }
// }
//
// // // riskyMethod1 -> riskyMethod2 -> riskyMethod3
//
// riskyMethod1(() => {
//   console.log("Succeed at 1")
//   riskyMethod2(() => {
//     console.log("Succeed at 2")
//     riskyMethod3(() => {
//       console.log("succeed at 3")
//     }, () => {
//       console.log("Failed at 3")
//     })
//   }, () => {
//     console.log("Failed at 2")
//   })
// }, () => {
//   console.log("Failed at 1")
// })


//Promise的演示

// let riskyMethod = (resolve, reject) => {
//   let r = Math.random()
//   if (r < 0.7) {
//     resolve()
//   } else {
//     reject()
//   }
// }
//
// let p = new Promise(riskyMethod)
//
// p.then(() => {
//   console.log("Succeed at 1")
//   return new Promise(riskyMethod)
// }, () => {
//   throw new Error("Failed at 1")
// }).then(() => {
//   console.log("Succeed at 2")
//   return new Promise(riskyMethod)
// }, () => {
//   throw new Error("Failed at 2")
// }).then(()=> {
//   console.log("Succeed at 3")
// }, () => {
//   throw new Error("Failed at 3")
// }).catch(err => console.log(err))

//2.Promise的演示
// 2.1 Promise初始化的步骤
//     1. 构造函数初始化，this.value, this.reason, resolve函数，reject函数
//     2. executor函数是构造函数的参数，调用executor函数，有两个参数：resolve函数，reject函数
//        executor函数是用户定义的，promise状态将如何变化的函数
//        executor以同步或者异步的方式调用resolve或者reject，
//        如果调用resolve函数，状态将由pending变为Fulfilled
//        如果调用reject函数，状态将由pending变为Rejected

// let p = new Promise((resolve, reject) => {
//   let r = Math.random()
//   if (r < 0.7) {
//     setTimeout(resolve, 30)
//   } else {
//     setTimeout(reject, 30)
//   }
// })

// 2.2 then的作用是为promise设定回调函数，onFulfilled, onRejected
// p.then(() => console.log("fulfilled!"), () => console.log("rejected"))


// 3. resolve/reject
// 3.1 resolve/reject既可以是同步的也，也可以是异步的，（阻塞的还是非阻塞的）
//     同步/异步：是在当前执行，还是稍后执行；阻塞/非阻塞：是否等执行的结果出来以后再执行下一句

// 同步/阻塞
// let p = new Promise((resolve, reject) => {
//   let r = Math.random()
//   if (r < 0.5) {
//     console.log(1.1)
//     resolve()
//   } else {
//     console.log(1.2)
//     reject()
//   }
// })
// console.log(2)
//
// p.then(() => console.log("fulfilled!"), () => console.log("rejected"))

//异步
// let p = new Promise((resolve, reject) => {
//   let r = Math.random()
//   if (r < 0.5) {
//     setTimeout(()=>{
//       console.log(1.1)
//       resolve()
//     },1000)
//   } else {
//     setTimeout(()=>{
//       console.log(1.2)
//       reject()
//     },1000)
//   }
// })
// console.log(2)
//
// p.then(() => console.log("fulfilled!"), () => console.log("rejected"))


// 3.2, resolve/reject可以向onFulfilled, onRejected 发送参数
// let p = new Promise((resolve, reject) => {
//   let r = Math.random()
//   if (r < 0.5) {
//     setTimeout(() => {
//       console.log(1.1)
//       resolve("String for fulfilled")
//     }, 1000)
//   } else {
//     setTimeout(() => {
//       console.log(1.2)
//       reject("String for reject!")
//     }, 1000)
//   }
// })
// console.log(2)
//
//
// p.then((value) => {
//   console.log("fulfilled!", value)
// }, (reason) => {
//   console.log("rejected", reason)
// })

// 3.3 如果调用resolve给入的参数是原始类型或者是非Promise的对象，Promise对象的状态同步阻塞的就变成fulFilled
//     如果调用resolve给入的参数是Promise的对象，那么，当前的Promise对象会一直保持pending状态，
//     直到给入的参数Promise对象状态发生变化，此时原Promise对象状态发生同样的变化，并且拿到参数Promise对象的数据（与参数Promise对象的状态一致）
// let p = new Promise((resolve, reject) => {
//   let r = Math.random()
//   if (r < 0.5) {
//     setTimeout(() => {
//       console.log(1.1)
//       resolve("String for fulfilled")
//       console.log(p)
//     }, 1000)
//   } else {
//     setTimeout(() => {
//       console.log(1.2)
//       reject("String for reject!")
//       console.log(p)
//     }, 1000)
//   }
// })
//
// console.log(2, p)
//
//
// p.then((value) => {
//   console.log("fulfilled!", value)
// }, (reason) => {
//   console.log("rejected", reason)
// })

// var p0 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(("p0:1"))
//     resolve("String for resolve in p0")
//     console.log("p0:", p0)
//     console.log("p", p)
//   }, 3000)
// })
//
// var p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("p:1")
//     resolve(p0)
//     console.log(p)
//   }, 1000)
// })
//
// console.log(2, p0, p)
//
// p.then((value) => {
//   console.log("fulfilled!", value, p0, p)
// }, (reason) => {
//   console.log("rejected!", reason)
// })

// 4. then有两个参数：onFulFilled, onRejected
//    then的返回值：一个新的"then返回Promise对象"
//    对于任何一个then，都会产生一个新的Promise，且与resolve参数中的Promise，或者onFulFilled，onRejected返回的Promise对象不是一个对象
//    情况1：onFulFilled被调用，返回了非Promise对象（有可能有返回值，也可能没有返回值），then返回Promise对象: 状态变为fulFilled，onFulFilled返回值会传递给then返回Promise对象。

// var p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("p:1")
//     resolve("string for resolve in p")
//     console.log("p:", p)
//   }, 1000)
// })
//
// var p3 = p.then((value) => {
//   console.log("fulfilled", value, p)
//   return 'xxxx xxx！'
// })
//
// console.log("p3:1", p3)
//
// setTimeout(() => {
//   console.log("p3:2", p3)
// }, 3000)

// 情况2：onFulFilled被调用，返回了onFulFilled Promise对象，then返回Promise对象: 状态变为fulFilled，
// 会传递onFulFilled Promise对象中的数据给then返回Promise对象。
// var p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("p:1")
//     resolve("string for resolve in p")
//     console.log("p:", p)
//   }, 1000)
// })
//
// var p3 = p.then((value) => {
//   console.log("fulfilled", value, p, p3)
//   return p
// })
//
// console.log("p3:1", p3)
//
// setTimeout(() => {
//   console.log("p3:2", p3)
// }, 3000)

//情况3：没设定onFulFilled，then返回Promise对象: 状态和p的状态保持一致，会传递p的数据给then返回Promise对象。
// var p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("p:1")
//     // resolve("string for resolve in p")
//     reject("string for reject in p")
//     console.log("p:", p)
//   }, 1000)
// })
//
// var p3 = p.then()
// console.log("p3:1", p3)
//
// setTimeout(() => {
//   console.log("p3:2", p3)
// }, 3000)


// 4. then的链式调用
// let riskyMethod = (resolve, reject) => {
//   let r = Math.random()
//   if (r < 0.7) {
//     resolve()
//   } else {
//     reject("Failed")
//   }
// }

// let p = new Promise(riskyMethod) // 1
// // 1.fulfilled: p3得到2的状态
// // 1.rejected: p3得到1状态的reject
// var p3 = p.then(() => {
//   console.log("Succeed at 1")
//   return new Promise(riskyMethod) // 2
// })

// // 2.fulfilled: p4得到3的状态
// // 2.rejected: p4得到2状态的reject
// // 1.rejected: p4得到1状态的reject
// var p4 = p3.then(() => {
//     console.log('Succeed at 2');
//     return new Promise(riskyMethod); // 3
// });

// // 3.fulfilled: p5得到3的resolve
// // 3.rejected: p5得到3状态的reject
// // 2.rejected: p5得到2状态的reject
// // 1.rejected: p5得到1状态的reject
// var p5 = p4.then(() => {
//     console.log('Succeed at 3');
// });

// p5.catch(err => console.log(err))

// 5. catch(onRejected) 等价于 then(null, onRejected)
// best practice：then只设定onFulFilled，在最后catch onRejected
// reject的三种方法：
// 5.1
// let riskyMethod = (resolve, reject) => {
//   reject("Failed")
// }
// var p = new Promise(riskyMethod)
// p.catch(err => {
//   console.log(err)
//   return err
// })


//5.2
// let riskyMethod = (resolve, reject) => {
//   try {
//     throw new Error("Failed")
//   } catch(e){
//     reject(e)
//   }
// }
// var p = new Promise(riskyMethod)
//
// p.catch(err => {
//   console.log(err)
//   return err
// })

//5.3
// let riskyMethod = (resolve, reject) => {
//   reject(new Error("Failed"))
// }
// var p = new Promise(riskyMethod)
//
// p.catch(err => {
//   console.log(err)
//   return err
// })

// 6. 练习，模拟连续做20个工作，有可能成功，也有可能失败
//      成功了，很好；失败，此次重来
const total = 20

function passOrFailed() {
  return (Math.random() < 0.7)
}

function doActionAsync(params, callback) {
  //do Action
  console.log(`---- doing Action ${params}----`)

  //set callback
  // setTimeout(callback.bind({params, pass: passOrFailed()}), 1000)
  setTimeout(callback.bind({params, pass: passOrFailed()}), Math.floor(Math.random() * 1000));
}

//公用部分
function doActionWithPromise(params) {
  return new Promise((resolve, reject) => {
    doActionAsync(params, function () {
      if (this.pass) {
        console.log(`====${this.params} task passed in Callback!====`)
        resolve(this.params)
      } else {
        console.log(`====${this.params} task failed in Callback! ====`)
        reject(this.params)
      }
    })
  })

}

//串行如何实现？
// then中的回调的调用是阻塞的，但是then函数不是阻塞的
// 当then返回的时候，then中的回调还没有被调用呢。
// 用函数的递归

// function doActionInSequence(total) {
//   return new Promise((resolve, reject) => {
//     function _doActionInSequence(i, total, resolve) {
//       let p = doActionWithPromise(i)
//       p.then(data => {
//         console.log(`Passed on ${data}, run next!`)
//         if (data + 1 < total) {
//           _doActionInSequence(data + 1, total, resolve)
//         } else {
//           resolve()
//         }
//       }).catch(reason => {
//         console.log(`Failed on ${reason}, run again`)
//         _doActionInSequence(reason, total, resolve)
//       })
//     }
//
//     _doActionInSequence(0, total, resolve)
//   })
// }

// doActionInSequence(total).then(() => console.log('All Finished!'));

//并行
//需要递归
//
// function doActionsParallelly(total){
//     return new Promise((resolve, reject) => {
//         function _doAnActionparallelly(i, resolveI){
//             let p = doActionWithPromise(i);
//             p.then(data => {
//                 resolveI(i);
//             }).catch(reason => {
//                 _doAnActionparallelly(i, resolveI);
//             });
//         }
//         let map = new Map();
//         for(let i = 0; i < total; i++){
//             _doAnActionparallelly(i, i => {
//                 map.set(i, true);
//                 if(map.size === total){
//                     resolve();
//                 }
//             });
//         }
//     });
// }
//
// doActionsParallelly(20).then(() => console.log('All Finished!'));
//

// 7. Promise.all([p1, p2, p3 ...])
//    返回值是一个新的promise对象
//    情况1， 没有任何一个px是Rejected状态，有px是pending状态：pending
//    情况2， 所有的px都已经FulFilled： FulFilled
//    情况3， 存在状态是Reject的px: Rejected


// let p1 = doActionWithPromise(1);
// let p2 = doActionWithPromise(2);

// let p = Promise.all([p1, p2]);
// p.then(() => console.log('============all fulfilled!'))
// .catch(() => console.log('============rejected!'));



// 8. Promise.race([p1, p2, p3 ...])
//    返回值是一个新的Promise对象
//    第一返回的px的状态，并且可以获得这个px的数据。

let p1 = doActionWithPromise(1);
let p2 = doActionWithPromise(2);
let p3 = doActionWithPromise(3);
let p4 = doActionWithPromise(4);

let p = Promise.race([p1, p2, p3, p4]);
p.then(data => {
  console.log(`===============${data} fulfilled!`);
}).catch(reason => {
  console.log(`===============${reason} rejected!`);
});


