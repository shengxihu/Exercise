var fs = require('fs');
fs.readFile('./index.js',function(err,data){
	console.log(data);
})
fs.writeFile('./test.js','hello',function(err){
	if (err) {
		console.log(err);
	}
	console.log('suc!');
})
fs.appendFile('./test.js','hello',function(err){
	if (err) {
		console.log(err);
	}
	console.log('suc!');
})
fs.watchFile(__dirname, function (curr, prev) {
  console.log('the current mtime is: ' + curr.mtime);
  console.log('the previous mtime was: ' + prev.mtime);
});
fs.stat('./test.js', function (err, stats) {
	if (err) { 
		return console.error(err); 
	} 
	console.log(stats)
});
fs.exists('/etc/passwd/index', function (exists) {
  console.log(exists);
});
var a=fs.createReadStream('./index.js', {start: 90, end: 99});
console.log(a);