/*
eslint-disable no-console
 */
/*
测试Mac最多可以创建多少个子进程
 */

//异步创建子进程
const child_process = require('child_process');

for(var i=0;i>=0;i++){
	console.log('开始创建第'+i+'个子进程！');
	child_process.fork('./child_try.js');
	//n.send('子进程创建成功！');
}

