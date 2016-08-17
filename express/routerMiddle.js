var express = require("express");
var app = express();
var router = express.Router();

router.use(function(req,res,next){
	console.log("Time:",Date.now());
	next();
});

router.use('/user/:id',function(req,res,next){
	console.log('Request URL:', req.originalUrl);
  	next();
}, function (req, res, next) {
  	console.log('Request Type:', req.method);
  	next();
});

router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id == 0) next('route');
  // otherwise pass control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // send a regular page
  res.send('regular');
});

// handler for the /user/:id path, which sends a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id);
  res.send('special');
});

// mount the router on the app
app.use('/', router);

app.listen(3000);