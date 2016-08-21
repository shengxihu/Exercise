var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

var chat = io
 .of('/chat')
 .on('connection', function (socket) {
    console.log("connected!")
   socket.emit('a message', {
       that: 'only'
     , '/chat': 'will get'
   },function(){
      socket.join('some');
     socket.to('some').emit('someEvent');
   });
   socket.emit('a message', {
       everyone: 'in'
     , '/chat': 'will get'
   });
 });

 var news = io
  .of('/news')
  .on('connection', function (socket) {
    socket.emit('item', { news: 'item' });
    socket.emit('a message', {
       that: 'only'
     , '/news': 'will get'
   });
  });