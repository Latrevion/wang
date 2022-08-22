(function () {
  function Snake(headX, headY, width, height, length, headBackgroundColor, bodyBackgroundColor, direction) {

    this.head = {
      x: headX,
      y: headY,
      backgroundColor: headBackgroundColor
    }
    this.body = []
    this.body.bodyBackgroundColor = bodyBackgroundColor
    this.length = length
    this.width = width
    this.height = height
    this.direction = direction
    this.divElements = []
  }

  Snake.prototype.CLASSNAME = "snake"
  Snake.prototype.DEFAULTWIDTH = 20
  Snake.prototype.DEFAULTHIGHT = 20
  Snake.prototype.DEFAULTLENGTH = 3
  Snake.prototype.DEFAULTHEADBACKGROUNDCOLOR = "#f00"
  Snake.prototype.DEFAULTBODYBACKGROUNDCOLOR = "#ff0"
  Snake.prototype.DEFAULTDIRECTION = "right"

  // 初始，调整模型，调用repaint
  Snake.prototype.init = function (map) {
    // 1.检查其他几个参数正确性
    var width = this.width || this.DEFAULTWIDTH
    var height = this.height || this.DEFAULTHIGHT
    var length = this.length || this.DEFAULTLENGTH

    // 2.检测head的正确性
    if (this.head.x === undefined) {
      this.head.x = length * width
    } else {
      this.head.x = Math.floor(this.head.x / width) * width
      if (this.head.x < 0) {
        this.head.x = 0
      } else if (this.head.x > map.offsetWidth - width) {
        this.head.x = map.offsetWidth - width
      }
    }

    if (this.head.y === undefined) {
      this.head.y = height
    } else {
      this.head.y = Math.floor(this.head.y / height) * height
      if (this.head.y < 0) {
        this.head.y = 0
      } else if (this.head.y > map.offsetHeight - height) {
        this.head.y = map.offsetHeight - height
      }
    }
    // 参数的约定：
    //   1. CSS中用过class设定了，初始化时没有传入（undefined），保持this.*是 undefined，这样在JS repaint才能知道不要覆盖这个样式
    //   2. CSS中没有设定，初始化时有传入值， JS repaint应该按照传入值渲染
    //   3. CSS中没有设定，初始化时没有传入（undefined），this.*应该被更新为default值，JS repaint应该按照传入值渲染



    this.head.backgroundColor = this.head.backgroundColor || this.DEFAULTHEADBACKGROUNDCOLOR

    // 3.根据head，length，direction，我们要判断，蛇初始位置会不会越界 对body初始化
    //     如果head越界了，我们把head挪到范围内
    // 如果加上身子越界了，直接报错
    // 什么时候可以很贴心很nice帮助修正错误，什么时候直接报错
    //  比较简单的情况下可以帮忙修正错误，如果比较复杂直接报错
    // 4调用repaint


  }

  // 根据要求，移动蛇，调整模型，调用repaint
  Snake.prototype.move = function (map, food) {
    // 1.移动蛇
    // 2.是不是迟到食物，处理食物，同时调整蛇
    // 3repaint
  }

  // 负责根据模型以及divElements的情况，做DOM操作
  Snake.prototype.repaint = function (map) {

  }

  window.Snake = Snake
})()


