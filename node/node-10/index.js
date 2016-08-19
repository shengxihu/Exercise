var fs = require('fs');
var child_process = require('child_process');
var add=10;

for(var i=0;i<=100;i+=10){
	var n = child_process.fork('./support.js');
	(function(i,add){
		//send是同步的！
		n.send({'i':i,'add':add});
	})(i,add)
}

