/*
var exec = require('child_process').exec;

var ls = exec('find /',function(error,stdout,stderr){
	if (error) {
		console.log(error.stack);
		console.log('Error code:'+error.code);
	}
	console.log('Child process STDOUT:'+stdout);
})



var child = exec('find /');

child.stdout.on('data',function(data){
	console.log('stdout:'+data);
})
child.stderr.on('data', function(data) {
  console.log('stderr: ' + data);
});
child.on('close',function(code){
	console.log('closing code:'+code);
})



var path = ";user input";
exec('ls -l ' + path, function (err, data) {
  console.log(data);
});


*/
var child_process = require('child_process');

/*
var path = '.';
child_process.execFile('/bin/ls',['-l',path],function(err,result){
	console.log(result);
})
*/


var n = child_process.fork('./child.js');
n.on('message', function(m) {
  console.log('PARENT got message:', m);
});
n.send({ hello: 'world' });
