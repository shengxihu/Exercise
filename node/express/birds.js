var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  //res.send('Birds home page');
  //res.render('index', { title: 'Hey', message: 'Hello there!'});
  	//res.send(new Buffer('whoop'));
	//res.send({ some: 'json' });
	//res.send('<p>some html</p>');
	//res.status(404).send('Sorry, we cannot find that!');
	res.set('Content-Type', 'text/html');
	res.send(new Buffer('<p>some html</p>'));
	res.status(500).send({ error: 'something blew up' });
});
// define the about route
router.get('/about', function(req, res) {
  //res.send('About birds');
  //res.download('test.png','report.png');
  //res.status(404);'
  //res.status(500).json({ error: 'message' });
  //res.jsonp({ user: 'tobi' });
  // // 这里注意重定向得路径写法！
  // res.redirect(301, 'foo/bar');
  // //或者
  // res.redirect(301, '/birds/foo/bar');
  //res.redirect('..');
  //'back'可以回到根界面
  res.redirect('back');
});

router.get('/foo/bar', function(req, res) {
  res.send('Birds home page');
});

module.exports = router;