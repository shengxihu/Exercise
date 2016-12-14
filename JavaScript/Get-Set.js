var obj_1 = {
	b: "Test",
	set a (a) {
		this.b+=a
  	},
  	get a () {
  		return this.b
  	}
}
obj_1.a="-测试"
console.log(obj_1.a)

var obj_2 = {
	c: "测试"
}
Object.defineProperty(obj_2, "d", {
	set: function (d){
		this.c+=d
	},
	get: function (){
		return this.c
	}
})
obj_2.d="-Test"
console.log(obj_2.d)

var expr = "foo"
 var obj_3 = {
 	e: "This Is A Test",
 	set [expr](x){
 		this.e += x
 	},
 	get [expr](){
 		return this.e
 	}
 }
 obj_3.foo="-这是一个测试！"
 console.log(obj_3.foo)

var obj_4 = {
	f: "测试"
}
var bar="Bar"
Object.defineProperty(obj_4, [bar], {
	set: function (y){
		this.f+=y
	},
	get: function (){
		return this.f
	}
})
obj_4.Bar="--Test"
console.log(obj_4.Bar)

var obj_5 = {
	a: 1,
}
obj_5.__defineSetter__("b",function(x){
	this.a = x
})
obj_5.__defineGetter__("b",function(){
	return this.a
})
obj_5.b=2
console.log(obj_5.b)
console.log(obj_5.__lookupSetter__("b"))
console.log(obj_5.__lookupGetter__("b"))

