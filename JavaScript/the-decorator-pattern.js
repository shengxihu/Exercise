var Car = function(){
    console.log("实现一个基类！")
}
Car.prototype = {
    start: function(){
        console.log("车子启动！")
    },
    drive: function(){
        console.log("老司机开车了！")
    }
}
BMWCar = function(car){
    this.car = car
}
BMWCar.prototype = {
    start: function(){
        this.car.start()
    },
    drive: function(){
        this.car.drive()
    }
}
BMWXCar = function(car) {
    BMWCar.call(this,car)
}
BMWXCar.prototype = new BMWCar()
BMWXCar.prototype.drive = function() {
    this.car.drive()
    console.log("宝马X开车")
}
BMWXCar.prototype.start = function() {
    this.car.drive()
    console.log("宝马X启动")
}

var car = new Car()

car =new BMWCar(car)

car =new BMWXCar(car)

// car.drive()
car.start()