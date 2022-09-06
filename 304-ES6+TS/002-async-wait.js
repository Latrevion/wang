// async 修饰函数定义：
//     1. 函数会天然返回一个Promise对象，如果不是，用Promise.resolve加工
//     2. 一旦一个函数用async，那么调用它的方式是异步的。
//     3. 返回的Promise对象，在函数执行完是fulFilled，如果任意一个await reject，那么整个函数reject。

// await 在函数调用前：
//     1. 被调用函数应当返回一个Promise对象
//     2. 在函数内部，await会阻塞函数的执行，直到Promise状态发生变化

function passOrFailed() {
  return (Math.random() < 0.9)
}

function doActionAsync(params, callback) {
  // do Action
  console.log(`---- doing Action ${params} ----`)

  // set callback
  setTimeout(callback.bind({params, pass: passOrFailed()}), Math.floor(Math.random() * 1000))
}

// 公用部分
function doActionWithPromise(params) {
  return new Promise((resolve, reject) => {
    doActionAsync(params, function () {
      if (this.pass) {
        console.log(`====${this.params} task passed in Callback!====`)
        resolve(this.params)
      } else {
        console.log(`====${this.params} task failed in Callback!====`)
        reject(this.params)
      }
    })
  })
}

// 应用1. 串行执行；如果执行成功，持续串行，如果失败，跳出
// async function doActionWithAsync(total) {
//   for (let i = 0; i < total; i++) {
//     await doActionWithPromise(i)
//   }
// }
//
// doActionWithAsync(10).then(() => console.log("all finished")).catch(() => console.log("some failed"))
//
// console.log("============= I am here!")

// 应用2. 串行执行，如果执行成功，继续串行，如果失败，rerun
// 递归
// function doActionWithRerun(i) {
//   return doActionWithPromise(i).catch(() => {
//     return doActionWithRerun(i)
//   })
// }
//
// async function doActionWithAsync(total) {
//   for (let i = 0; i < total; i++) {
//     await doActionWithRerun(i)
//   }
// }
//
// doActionWithAsync(10).then(() => console.log("all finished")).catch(() => console.log("some failed"))

// 应用3， 并行执行；所有任务完成后，显示all finished
// function doActionWithRerun(i) {
//   return doActionWithPromise(i).catch(() => {
//     return doActionWithRerun(i)
//   })
// }
//
// async function doActionWithAsync(total) {
//   let map = new Map()
//   for (let i = 0; i < total; i++) {
//     let p = doActionWithRerun(i)
//     map.set(i, p)
//   }
//
//   for (let i=0;i<total;i++){
//     await map.get(i)
//   }
// }
//
// doActionWithAsync(10).then(() => console.log("all finished")).catch(() => console.log("some failed"))


// try/catch: 和promise后面的then和catch很像
// 应用4. 串行执行；如果执行成功，持续串行，如果失败，跳出
// async function doActionWithAsync(total) {
//   try {
//     for (let i = 0; i < total; i++) {
//       await doActionWithPromise(i)
//     }
//   } catch (e) {
//     console.log("some failed")
//   }
// }
//
// doActionWithAsync(10)


// 应用5. 串行执行，如果执行成功，继续串行，如果失败，rerun
// 递归
// function doActionWithRerun(i) {
//   return doActionWithPromise(i).catch(() => {
//     return doActionWithRerun(i)
//   })
// }
//
// async function doActionWithAsync(total) {
//   try {
//     for (let i = 0; i < total; i++) {
//       await doActionWithRerun(i)
//     }
//     console.log("all finished")
//   } catch (e) {
//     console.log("some failed")
//   }
// }
//
// doActionWithAsync(10)


// 应用6， 并行执行；所有任务完成后，显示all finished
function doActionWithRerun(i){
  return doActionWithPromise(i).catch(() => {
    return doActionWithRerun(i);
  });
}

async function doActionsWithAsync(total){
  try {
    let map = new Map();
    for(let i = 0; i < total; i++){
      let p = doActionWithRerun(i);
      map.set(i, p);
    }

    for(let i = 0; i < total; i++){
      await map.get(i);
    }
    console.log('all finished!');
  }catch(e){
    console.log('some failed!');
  }

}

doActionsWithAsync(10);









