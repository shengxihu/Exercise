/*
var bytes = new Buffer(256);

for(var i = 0;i<bytes.length;i++){
	bytes[i] = i;
}

var end = bytes.slice(240,256);

console.log(end[0]);
 */

var fs = require('fs');
var buffer = new Buffer(1024);

var readSize = fs.readSync(fs.openSync('/dev/tty', 'r'), buffer, 0, 100);
var chunk = buffer.toString('utf8', 0, readSize);

console.log('INPUT: ' + chunk);