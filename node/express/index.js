var express = require('express');
var app = express();

// app.all("/",function(req,res){
// 	res.send("GET request to the homepage!")
// })

// app.post('/', function (req, res) {
//   res.send('POST request to the homepage');
// });

// app.get(/a/, function (req, res, next) {
//   console.log('the response will be sent by the next function ...');
//   next();
// }, function (req, res) {
//   res.send('Hello from B!');
// });

// app.get('/users/:userId/books/:bookId', function(req, res) {
//   res.send(req.params);
// });

// app.get('/flights/:from-:to', function(req, res) {
//   res.send(req.params);
// });

// var cb0 = function (req, res, next) {
//   console.log('CB0');
//   next();
// }

// var cb1 = function (req, res, next) {
//   console.log('CB1');
//   next();
// }

// var cb2 = function (req, res) {
//   res.send('Hello from C!');
// }

// app.get('/rr',[cb0, cb1, cb2]);

// // create chainable route handlers for a route path by using app.route();

// app.route('/book')
//   .get(function(req, res) {
//     res.send('Get a random book');
//   })
//   .post(function(req, res) {
//     res.send('Add a book');
//   })
//   .put(function(req, res) {
//     res.send('Update the book');
//   });

//var birds = require('./birds');

//app.use('/birds', birds);

//app.set('view engine', 'pug');

app.get('/file/:name',function(req,res,next){
	var options = {
		root:__dirname + '/public/',
		ditfiles: 'true',
		headers: {
			'x-timestamp': Date.now(),
			'x-sent': true
		}
	};
	var fileName = req.params.name;
	res.sendFile(fileName,options,function(err){
		if (err) {
			console.log(err)
			res.status(err.status).end();
		} else {
			consloe.log("sent:",fileName);
		}
	});
})

app.listen(3000);