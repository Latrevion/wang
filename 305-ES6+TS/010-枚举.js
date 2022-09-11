// 枚举
// enum Gender {Male, Female}
//
// console.log(Gender);
var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days);
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 'M'] = "Male";
    Gender[Gender["Female"] = 'F'] = "Female";
})(Gender || (Gender = {}));
console.log(Gender);
// enum Gender {Male, Female};
// console.log(Gender);
// 字符串 <-> 数值
// 缺省，从0开始排序，依次加1
// 可以给某个枚举值设定数值，其后的枚举值自动加1
// 注意，自加的枚举数值，不保证和已经设定的数值不重合
// 所设定的数值，可以是整数，也可以是小数，不影响加1
// 所设定的数值可以不是number，可以是字符串。
// enum Days {Sun = 1.5, Mon, Tue, Wed, Thu, Fri, Sat};
//
// console.log(Days);
//
// // enum Gender {Male = <any>'M', Female = <any>'F'};
//
// // console.log(Gender);
//
// // 常数枚举: 普通枚举有对象，常量枚举没有对象，对象实体只存在于TS中，当翻译为ES5代码时，被删除了。
// const enum Gender {Male, Female};
// // console.log(Gender);
// console.log(Gender.Male, Gender.Female);
// let gender = [Gender.Male, Gender.Female];
// console.log(gender);
