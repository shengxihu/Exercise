var request = require('superagent');
var url='http://www.tuling123.com/openapi/api';
var output;
function xiXi(input){
	obj={"key":"5d22b649705542e69c566a7356e6bbd6","info":input}
	request.post(url,obj,function(err,res){
		data=JSON.parse(res.text);
		output=data.text;
	});
}