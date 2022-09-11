// 类和接口
// 类是一个已经实现了所有细节的构造器
// 接口是对对象细节的描述
// 如果一个类声称实现了一个接口，那么这个类构造出来的实例一定符合这个接口
var A = /** @class */ (function () {
    function A(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    A.prototype.f = function (x) {
        console.log(this.a, this.b);
    };
    A.prototype.f2 = function (x) {
        console.log(this.c);
    };
    return A;
}());
