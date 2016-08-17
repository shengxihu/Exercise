var express = require("express");
var app = express();

var myLogger = function(req,res,next){
	console.log("Logged!");
	next('Tes');
}
app.use(myLogger);

//在其他app.use()和路由调用之后定义中间件函数

app.use(function(err,req,res,next){
	res.status(500).send({ error: 'Something failed!' });
	next();
})

app.get("/",function(req,res){
	var responseText = 'Hello World!';
  	res.send(responseText);
})

app.listen(3000);