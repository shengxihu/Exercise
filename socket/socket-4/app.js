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

io.sockets.on('connection', function (socket) {
    socket.on('firefox', function (data) {
      console.log("hello hsx!")
        socket.join('firefox');
        //不会给自己发
        socket.broadcast.to('firefox').emit('test', 'hello');
        //会给自己发
        io.sockets.in('firefox').emit('test', 'hello');
    });
});

