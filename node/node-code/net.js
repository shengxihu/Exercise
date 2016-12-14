var net = require('net');

var pendingClients = {};
var clientsCount = 0;

var server = net.createServer(function (socket) {
    var buffer = '';
    socket.setEncoding('utf-8');
    socket.on('data', onData);

    function onData(chunk) {
        buffer += chunk;
        // Parse request data.
        // ...

        if ('I have got all I need') {
            socket.removeListener('data', onData);

            // Doing this to provide the same interface with official http module
            var req = {
                clientId: 'whatever'
            };
            var res = new ServerResponse(socket);
            server.emit('request', req, res);
        }
    }
});

server.on('request', function (req, res) {
    // Other business logic
    // ...

    clientsCount++
    console.log(clientsCount);

    sendResponse(res);
    cacheSocket(req, res);
});

server.listen(3000);

// Custom ServerResponse
function ServerResponse(socket) {
    this.socket = socket;
}
ServerResponse.prototype.write = function(data) {
    if (this._headerSent) {
        // Send http header
        // ...

        this._headerSent = true;
    }

    // Parse data to 'Transfer-Encoding: chunked'
    // ...

    this.socket.write(data);
}

function sendResponse(res) {
    res.write('PING');
}

function cacheSocket(req, res) {
    pendingClients[req.clientId] = {
        res: res
    };

    res.socket.on('error', function (err) {
        console.log(err);
    });

    res.socket.on('close', function () {
        delete pendingClients[req.clientId];

        clientsCount--;
    });
}