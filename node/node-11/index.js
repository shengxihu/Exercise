var fs = require('fs');
var child_process = require('child_process');

for(var i=0;i<=10;i+=1){
    var n = child_process.fork('./support.js');
	(function(i,add){
		//send是同步的！
		n.send({'i':i},function(){
			console.log("编号发送成功！");
		});
	})(i)
}

