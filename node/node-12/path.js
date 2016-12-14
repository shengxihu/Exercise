var path = require('path');

var a = path.normalize('/foo/bar//baz/asdf/quux/..');
var b = path.normalize('/foo/bar//baz/asdf/quux/../');

console.log(a);
console.log(b);

//规范化字符串路径，注意 '..' 和 '.' 部分,多个斜杠会被替换成一个； 路径末尾的斜杠会被保留
var c = path.join('foo','bar/..');

console.log(c);

var d = path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile');

console.log(d);

var e = path.extname('index.html');

console.log(e);

var f = 'foo/bar/baz'.split(path.sep)

console.log(f);