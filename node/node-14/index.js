var request = require('superagent');
var url_1='http://www.tuling123.com/openapi/api';
var url_2='http://www.tuling123.com/openapi/api';
function muMu(input){
	var data,output;
	obj={"key":"36c6a029a7a94f1da9e142c12526b875","info":input}
	request.post(url_1,obj,function(err,res){
		data=JSON.parse(res.text);
		output=data.text;
		if (input==output) {
			output='说什么呢'
		}
		console.log('🕵小木说：'+output);
		xiXi(output);
	});
}
function xiXi(input){
	var data,output;
	obj={"key":"5d22b649705542e69c566a7356e6bbd6","info":input}
	request.post(url_2,obj,function(err,res){
		data=JSON.parse(res.text);
		output=data.text;
		if (input==output) {
			output='什么呀'
		}
		console.log('👰小犀说：'+output)
		muMu(output);
	});
}
var init = process.argv.splice(2)[0];
muMu(init); 