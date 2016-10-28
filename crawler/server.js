var express = require('express');
var swig = require('swig');
var app = express();
var User = require("./user.js");

function server(data,flag,i) {

	app.get('/'+i,function(req,res){
		res.send(data)
	})
	if (!flag) {
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
			var dt={"title" : "test", "author" : "白小爱", "link" : "https://segmentfault.com/a/1190000007019545", "time" : "9月27日", "desc_arr" : "由于FetchAPI是基于Promise设计，有必要先学习一下Promise，推荐阅读MDNPromise教程本文章内容推荐阅读MDNFetch教程语法说明{代码...}具体参数案例：{代码...}url定义要获取的资源。这可能是：...", "__v" : 0 }
			var item = new User(dt);
			item.save(function(err){
				if (err) {throw err}
				console.log("post请求成功！")
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