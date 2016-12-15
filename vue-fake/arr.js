const arrMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
let newArrayMethods = []
arrMethods.forEach(function(method){
    let original = Array.prototype[method];

    newArrayMethods[method] = function(arg){
        console.log("这是新的数组方法！")
        return original.apply(this,[arg])
    }
})
let list = ['a', 'b', 'c'];
// 将我们要监听的数组的原型指针指向上面定义的空数组对象
// 别忘了这个空数组的属性上定义了我们封装好的push等方法
list.__proto__ = newArrayMethods
list.push('d');