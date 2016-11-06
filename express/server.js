var express = require('express');
var app = express();

app.use(express.static('view'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/process_get', function(req, res) {
    res.location('http://www.baidu.com');
    res.statusCode = 302;
    res.end('响应的内容');
})

var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})