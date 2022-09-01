// WeakSet, WeakMap
// Set,Map大部分的使用都一样
// 1. WeakSet所有的值必须是引用类型，WeakMap所有key必须是引用类型
// 2. WeakSet, WeakMap不会影响垃圾收集，所以这两个数据结构不可以遍历
//    防止内存泄露