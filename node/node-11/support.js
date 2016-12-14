process.on('message',function(m){
	console.log(m);
	//process.disconnect();
	process.exit()
});
// console.log("不在父子进程之间传递数据！")