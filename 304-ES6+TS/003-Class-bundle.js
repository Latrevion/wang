'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 1. ES5里面的构造函数和对象
//    ES6里的class是语法糖，也不支持类型

// 1.1 ES5里构造函数和对象是怎么使用的？
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.say = function(words){
//     console.log(`${this.name} is saying ${words}.`);
// }

// let p = new Person('隔壁王校长', 25);
// p.say('hello World');

// 1.2 用ES6 class的写法：
// ES6用属性表达式的方法定义属性
// let methodName = 'say';

// class Person {
//     // 写成这个样子的函数都是在prototype上的。
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     [methodName](words){
//         console.log(`${this.name} is saying ${words}.`);
//     }
// }

// let p = new Person('隔壁王校长', 25);
// p.say('hello world');

// let p1 = new Person('隔壁王校长3', 27);

// 1.3 ES6写法与ES5写法的相同点
// console.log(Person === Person.prototype.constructor);
// console.log(p.constructor === Person.prototype.constructor);
// console.log(p.say === Person.prototype.say);

// 1.4 ES6写法与ES5写法的不同点
//  用class方式实现的函数，是不可以枚举的。
// console.log(Object.keys(Person.prototype));

//  用class方式实现的构造函数，调用时必须使用new，否则报错
// Person('aaa', 25);

//  通过实例访问原型的方式
//  在ES6中，如果通过实例访问原型，Object.getPrototypeOf()
// console.log(p.__proto__);
// console.log(p1.__proto__ === p.__proto__);
// console.log(p1.__proto__ === Object.getPrototypeOf(p1));

// 2. class表达式
// const MyPerson = class {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     say(words){
//         console.log(`${this.name} is saying ${words}.`);
//         // console.log(Person.name);
//     }
// }
// 2.3 class表达式可以写成立即执行函数的形式
// let p = new class {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     say(words){
//         console.log(`${this.name} is saying ${words}.`);
//         // console.log(Person.name);
//     }
// }('隔壁王校长', 30);
// p.say('hello');
// 2.1 Person作为内部的名字只在内部有效，在外部无效。
// console.log(Person.name);
// 2.2 class表达式可以没有class名字

// 3. function 会提升变量; 但是class不会
//    所有的class，必须先定义后使用

// console.log(Person);
// function Person(){

// }
// class Person {
//     constructor(){

//     }
// }

// console.log(Person);

// 4. this的指向

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         // 4.1 用bind进行绑定
//         // this.say = this.say.bind(this);
//         // 4.2 用箭头函数
//         this.say = words => {
//             console.log(`${this.name} is saying ${words}.`);
//         };
//     }


// }

// let p = new Person('隔壁王校长', 25);
// // p.say('hello');
// let say = p.say;
// function f(callback){
//     callback();
// }
// f(p.say);

// 5. getter/setter, 属性
// let obj = {
//     _a: 0,
//     get a(){
//         return this._a;
//     },
//     set a(x){
//         this._a = x;
//     }
// }

// console.log(obj.a);
// obj.a = 3;
// console.log(obj.a);

// class Person {
//     _name = '';
//     _age = 0;
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//         this.say = words => {
//             console.log(`${this.name} is saying ${words}.`);
//         };
//     }

//     get name(){
//         return this._name;
//     }
//     set name(name){
//         this._name = name;
//     }

//     get age(){
//         return this._age;
//     }
//     set age(age){
//         this._age = age;
//     }

// }

// let p = new Person('隔壁王校长', 25);
// p.say('hello');

// 6. 静态方法和属性，类名、构造函数名就能访问的属性和方法

var Person = function () {
    _createClass(Person, null, [{
        key: 'staticMethod',
        value: function staticMethod(words) {
            console.log('static say ' + words);
        }
    }]);

    function Person() {
        _classCallCheck(this, Person);
    }

    return Person;
}();

Person.staticNumber = 5;


var p = new Person();
// p.staticMethod('hello!');
Person.staticMethod('hello!');
console.log(Person.staticNumber);
