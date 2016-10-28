var express = require('express');
var swig = require('swig');
var app = express();
var bodyParser = require('body-parser');
var User = require("./user.js");
var fs = require('fs');

function server(data,flag,i) {

	app.get('/'+i,function(req,res){
		res.send(data)
	})
	if (!flag) {
		app.use(bodyParser.urlencoded({extended: false}));
		app.use(bodyParser.json());

		app.set('view engine', 'html');  // 用hbs作为模版引擎
        app.set('views', __dirname + '/view'); // 模版所在路径
        app.engine('html', swig.renderFile);
		app.get('/',function(req,res){
			res.render('index',{data: data});
		})

		app.get('/add',function(req,res){
			res.render('add');
		})
		app.post('/add',function(req,res){
			var title = req.body.title;
			var re = new RegExp(title);
			User.find({'title':re},function(err, user){
				if (err) {throw err}
				console.log("post请求成功！");
				res.send({data:user});
			})
		})

		var server = app.listen(1212, function () {
			var host = server.address().address;
			var port = server.address().port;

			console.log('Example app listening at http://%s:%s', host, port);
		});
	}
}

exports.server = server;