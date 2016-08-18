var request = require('superagent');

request('https://segmentfault.com/blogs?page=1', function(err,res){
	console.log(res.text.toString());
 });