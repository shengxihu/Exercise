var express = require('express');
var swig = require('swig');
var app = express();
var bodyParser = require('body-parser');
var User = require("./user.js");
var fs = require('fs');

function server(data,flag,i) {

	app.get('/'+i,function(req,res){
		res.render('index',{data: data,pg:i});
	})
	if (!flag) {
		app.use(bodyParser.urlencoded({extended: false}));
		app.use(bodyParser.json());
		app.set('view engine', 'html');  // 用hbs作为模版引擎
        app.set('views', __dirname + '/view'); // 模版所在路径
        app.engine('html', swig.renderFile);
		app.get('/',function(req,res){
			res.render('index',{data: data,pg:1});
		})

		app.get('/add',function(req,res){
			res.render('add');
		})
		var dat;
		var titl;
		app.post('/search',function(req,res){
			var title = req.body.title;
			var re = new RegExp(title);
			User.find({'title':re},function(err, user){
				if (err) {throw err}
				console.log("post请求成功！");
			    dat=user;
			    titl=title;
				title='';
			    res.send({data:dat,titl:title});
			})
		})
		app.get('/search',function(req,res){
			res.render('search',{data:dat,titl:titl});
			//res.redirect('http://www.baidu.com');
			titl='';
		})

		var server = app.listen(3000, function () {
			var host = server.address().address;
			var port = server.address().port;

			console.log('Example app listening at http://%s:%s', host, port);
		});
	}
}

exports.server = server;