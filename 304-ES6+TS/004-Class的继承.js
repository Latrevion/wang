// 1. Class的继承 面向对象 => 复用 reuse

// class Person {
//   // 写成这个样子的函数都是在prototype上的。
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//     this.say = this.say.bind(this)
//   }
//
//   say(words) {
//     console.log(`${this.name} is saying ${words}.`)
//   }
// }
//
// class Student extends Person {
//   constructor(studentId, ...args) {
//     // 1. 调用基类构造函数
//     super( ...args)
//     this.studentId = studentId
//     this.study = this.study.bind(this)
//   }
//
//   study(knowledge) {
//     console.log(`studeng ${this.studentId} is studying ${knowledge}`)
//   }
//
// }
//
// let xiaohong = new Student(1, "小红", 15)
// xiaohong.say("hello")
// console.log(xiaohong.name)
// xiaohong.study('math')
// console.log(xiaohong.studentId)
//
//
// console.log(Object.getPrototypeOf(Student)=== Person)
// console.log(Student.prototype.__proto__ === Person.prototype)


// class Student extends Person{ // 派生类 派生 自基类，任何派生类的实例都是基类的实例
//     constructor(studentId, ...args){
//         // 1. 调用基类构造函数
//         super(...args);
//         console.log(1, args);

//         // 2. super()代表基类构造函数
//         //   2.1 super()必须在构造函数中调用，ES5中，先有this，后调用基类构造函数；ES6中，this是super初始化的。
//         //   2.2 在派生类构造函数完成以前，必须调用基类构造函数
//         //   2.3 在调用super以前，不能使用this
//         this.studentId = studentId;
//         this.study = this.study.bind(this);
//     }

//     study(knowledge){
//         console.log(`Student ${this.studentId} is studying ${knowledge}`);
//     }
// }

// let xiaohong = new Student(1, '小红', 13);
// xiaohong.say('hello!');
// console.log(xiaohong.name);
// xiaohong.study('物理');
// console.log(xiaohong.studentId);

// 继承关系 Student.prototype是Person构造出来的
// console.log(Object.getPrototypeOf(Student) === Person);
// console.log(Student.prototype.__proto__ === Person.prototype);

// 3. super作为对象使用；

class Person {
  // 写成这个样子的函数都是在prototype上的。
  constructor(name, age) {
    this.name = name
    this.age = age

  }

  say(words) {
    console.log(`${this.name} is saying ${words}.`)
  }

  f(){
    console.log('in Person')
  }
}

Person.prototype.name = "hahaha"

class Student extends Person {
  constructor(studentId, ...args) {
    super(...args)
    this.studentId = studentId
  }

  test() {
    console.log(super.name, this.name)
  }

  f(){
    console.log('in Student')
  }
}

let s = new Student(1, "xiaoming", 25)
s.test()
s.f()

//    super 3.1 在普通函数中，如果super后面是属性，在读取值时，充当基类的原型对象
//                      如果super后面是属性，在赋值的时候，充当派生类this使用
//     3.2 在普通函数中，如果super后面是方法，调用的是基类原型的方法，但是函数中绑定的this是派生类的
//     3.3 super不能以无法确定是构造函数还是对象的方式调用

// class Person {
//   // 写成这个样子的函数都是在prototype上的。
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//     this.say = this.say.bindd(this)
//   }
//
//   say(words) {
//     console.log(`${this.name} is saying ${words}.`)
//   }
//
//   f() {
//     console.log("in Person")
//     this.f1()
//   }
//
//   f1() {
//     console.log("in Person of f1")
//   }
// }
//
// Person.prototype.name = "hahaha"
//
// class Student extends Person {
//   constructor(studentId, ...args) {
//     super(...args)
//     this.studentId = studentId
//   }

// test() {
// 赋值的时候，super相当于this
// super.name = '小兰';
// super指向的是Person.prototype, 所以如果访问基类的属性，用this
// console.log(super.name, this.name);
// this.f();
// super.f指向的是基类的f,但是this绑定的是派生类的this
// super.f();

// console.log(super);

// }

// 基类和派生类可以有同名的方法

//   f() {
//     console.log("in Student")
//   }
//
//   f1() {
//     console.log("in Student of f1")
//   }
// }
//
// let s = new Student(1, "晓明", 25)
// s.test()
// // s.f();
//
// let p = new Person("小红", 23)
// p.f()
//
//
//


