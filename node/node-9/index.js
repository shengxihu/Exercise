/*
eslint-disable no-console
 */

//异步创建子进程
const spawn = require('child_process').spawn;
const ls = spawn('ls',['-lh','/usr']);

//同步创建子进程可以使用child_process.spawnSync()
ls.stdout.on('data',(data) => {
	console.log('stdout:'+data);
});

ls.stderr.on('data',(data) => {
	console.log('stderr:'+data);
});

ls.on('close',(code) =>{
	console.log('child process exit with code:'+code);
});

