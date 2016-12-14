console.log = function(d) {
  process.stdout.write(d + '\n');
}; 
console.log('Test!');

var path = require.resolve('domain');

console.log(path);

//模块在引入时会缓存到该对象
var a = require.cache['/Users/hsx/Exercise/node/node-12/global.js'];

for(var key in a) {
	console.log(key+':'+a[key]+"_______");
}


//当前所执行代码文件的文件路径
//各模块本地的
console.log(__filename);

//当前执行脚本所在目录的目录名
//各模块本地的
console.log(__dirname);

//当前模块的引用
console.log(module);

for(var key in module) {
	console.log(key+':'+module[key]+"++++++++++");
}

var a=setImmediate(function(){
	console.log("setImmediate");
});

clearImmediate(a);
console.log(a+'===');
