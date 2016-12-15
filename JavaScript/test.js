var CarDecorator = function(car){
    console.log(car)
}
var PowerLocksDecorator = function(car) {
    // 这是JavaScript里调用父类构造函数的方式
    CarDecorator.call(this, car);
    console.log('装配：添加动力锁');
}
var test = new PowerLocksDecorator("Hello world!")