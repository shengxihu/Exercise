var mongoose = require('mongoose');
var express = require('express');
var app = express();

var db=mongoose.createConnection('localhost','test');
db.on('error',console.error.bind(console,'连接错误！'));

var User = mongoose.model("User",{
	username: String
})

app.get('/',function(req,res){
	res.sendfile('./index.html')
})
app.get('/admin',function(req,res){
	console.log(1);
	var obj={
		username: req
	}
	var item = new User(obj);
})

app.listen(3000);