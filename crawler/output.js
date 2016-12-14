var request = require('superagent');
var fs=require("fs");
var html;

request('https://segmentfault.com/blogs?page=1', function(err,res){
	html = res.text.toString();
	fs.appendFile('segmentfaultBlog.html',html,"utf-8",function(err){
		if (err) {
			throw err;
		} else {
			console.log("数据写入成功！")
		}
	})
});