const child_process = require('child_process');
var n = child_process.fork('./child.js');
n.on('message',function(m){
/* eslint-disable no-console */
	console.log('Parent got message:',m);

});
n.send({hello:'world!'});