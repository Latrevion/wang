'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MyMath = function () {
  function MyMath() {
    _classCallCheck(this, MyMath);

    console.log('here is constructor!');
  }

  _createClass(MyMath, [{
    key: 'add',
    value: function add(a, b) {
      return a + b;
    }
  }]);

  return MyMath;
}();

var m = new MyMath();
console.log(m.add(1, 2));
