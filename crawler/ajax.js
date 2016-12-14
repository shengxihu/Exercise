var request = require('superagent');
var data;
function ajax(next,page){
	var url='https://segmentfault.com/blogs?page='+page;
	request(url, function(err,res){
		data = res.text.toString();
		next(data,page)
	});
	console.log("向第"+page+"页发出请求！")
	console.log(url);
}
exports.ajax = ajax;