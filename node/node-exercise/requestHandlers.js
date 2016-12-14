var querystring = require("querystring");

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/hello" method="post">'+
    '<textarea name="text" rows="1" cols="10"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function hello(response, postData) {
  console.log("Request handler 'hello' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello: "+
  querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.hello = hello;