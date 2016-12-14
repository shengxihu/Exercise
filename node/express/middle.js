var express = require("express");
var app = express();

var reqTime = function(req,res,next){
	req.reqTime = Date.now()
	next();
}
app.use(reqTime);

var myLogger = function(req,res,next){
	console.log("Logged!")
	next();
}
app.use(myLogger);

app.get("/",function(req,res){
	var responseText = 'Hello World!';
  	responseText += 'Requested at: ' + req.reqTime + '';
  	res.send(responseText);
})
// app.get('/user/:id', function (req, res, next) {
//   console.log('ID:', req.params.id);
//   next();
// }, function (req, res, next) {
//   res.send('User Info');
// });

// // handler for the /user/:id path, which prints the user ID
// // This route while never be invoked
// app.get('/user/:id', function (req, res, next) {
//   res.end(req.params.id);
// });


//使用next("route")跳过中间件堆栈中剩余的中间件函数，仅在使用app.METHOD()或router.METHOD()函数装入的中间件函数中有效
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id == 0) next('route');
  // otherwise pass the control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.send('regular');
});

// handler for the /user/:id path, which sends a special page
app.get('/user/:id', function (req, res, next) {
  res.send('special');
});

app.listen(3000);