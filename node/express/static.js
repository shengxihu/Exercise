var express = require('express');
var app = express();

var options = {
	dotfiles: 'ignore',
	etag: false,
	extension: ['htm','html'],
	index: false,
	maxAge: '1d',
	redirect: false,
	setHeaders: function(res,path,stat){
		res.set('x-timestamp',Date.now());
	}
}

//app.use(express.static(__dirname + 'public'));
app.use(express.static(__dirname + '/public'));

app.listen(3000);