
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork().on('listening', (address) => {
      console.log('Worker is listening on'+address);
      for(var key in address){
        console.log(key+':'+address[key]);
      }
    }).send('hi there');
    console.log(cluster.workers+"================");
    console.log('worker' + process.pid );
    var timeouts = [];
    function errorMsg() {
      console.error('Something must be wrong with the connection ...');
    }

    cluster.on('fork', (worker) => {
      timeouts[worker.id] = setTimeout(errorMsg, 2000);
      console.log(worker.id+'____________________')
    });
    cluster.on('listening', (worker, address) => {
      clearTimeout(timeouts[worker.id]);
    });
    cluster.on('exit', (worker, code, signal) => {
      clearTimeout(timeouts[worker.id]);
      errorMsg();
    });
  }

} else {
  // 终止工作进程
  //worker.kill();
  console.log(cluster.worker.id+"+++++++++++++++")
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
  process.on('message', (msg) => {
    console.error('msg:%s',msg);
    console.time(1);
    console.timeEnd(1);
  });
}




/*2
const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {

  // Keep track of http requests
  var numReqs = 0;
  setInterval(() => {
    console.log('numReqs =', numReqs);
  }, 1000);

  // Count requests
  function messageHandler(msg) {
    if (msg.cmd && msg.cmd == 'notifyRequest') {
      numReqs += 1;
    }
  }

  // Start workers and listen for messages containing notifyRequest
  const numCPUs = require('os').cpus().length;
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  Object.keys(cluster.workers).forEach((id) => {
    cluster.workers[id].on('message', messageHandler);
  });

} else {

  // Worker processes have a http server.
  http.Server((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');

    // notify master about the request
    process.send({ cmd: 'notifyRequest' });
  }).listen(8000);
}
*/

/*3
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork().on('online', () => {
      console.log('Worker is online!')
    }).on('listening', (address) => {
      console.log('Worker is listening on'+address);
      for(var key in address){
        console.log(key+':'+address[key]);
      }
    });
    console.log('worker' + process.pid );
  }
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
}
*/