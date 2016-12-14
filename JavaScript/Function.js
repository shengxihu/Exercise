//Positional parameters
	function positionalParameters(a,b,c){
		d=a+1
		e=b+2
		f=c+3
		console.log(3,3,6)
		console.log("______________")
		console.log("d="+d,'e='+e,'f='+f)
	}
	//positionalParameters(b=1,a=2,c=3)
//Named parameters
	function namedParameters(options){
		options=options || {}
		var a=options.a
		var b=options.b
		var c=options.c
		d=a+1
		e=b+2
		f=c+3
		console.log(3,3,6)
		console.log("______________")
		console.log("d="+d,'e='+e,'f='+f)
	}
	//namedParameters({b: 1,a: 2,c: 3})
//Variable hoisted
	function f(){
		console.log(a)
		//console.log(b)
		var a=1
		var a=2
		console.log(a)
	}
	//f()
//IIFE
	/*
	!function(){
		console.log(1)
	}()
	void function(){
		console.log(1)
	}()
	*/
	var a=function(){
		return function(){
			console.log(1)
		}
	}()
	console.log(a)
	var b=this;
	for(var key in b){
		console.log(b[key])
	}