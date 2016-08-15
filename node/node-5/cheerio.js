var cheerio = require("cheerio");
var request = require("sync-request");
var fs = require("fs");

var url = "http://list.jd.com/list.html?cat=9987,653,655";
var html = " ";
html = request('GET', url).getBody().toString();
$ = cheerio.load(html);
c=$("body").html("<div>TEST!</div>").html();
var c=$("body").html();



