var express = require('express');
var app = express();

app.get('/user/:uid/photos/:file', function(req, res){
  var uid = req.params.uid
    , file = req.params.file,
    yes=false;

  (function(uid,yes){
    if (yes) {
      res.sendFile(__dirname +'/public/' + uid + '/' + file);
    } else {
      res.status(403).send('Sorry! you cant see that.');
    }
  })(uid,yes);
});

app.listen(3000);