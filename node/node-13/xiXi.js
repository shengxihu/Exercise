var request = require('superagent');
var url='http://www.tuling123.com/openapi/api';
var output;
function muMu(input){
	obj={"key":"36c6a029a7a94f1da9e142c12526b875","info":input}
	request.post(url,obj,function(err,res){
		data=JSON.parse(res.text);
		output=data.text;
	});
}