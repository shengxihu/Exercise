#!/usr/bin/env node 
var fs = require("fs"),
path = process.cwd();

var run = function (obj) {
    if(obj[0] === '-v') {
	console.log('Version is 1.0.0.0');
    } else if (obj[0] === '-h') {
	console.log('Usage:');
	console.log(' -v --version [show version]');
    } else{
    fs.readdir(path, function(err,files){
	if(err){
	    return console.log(err);
	 }
	 for(var i = 0;i < files.length; i +=1){
	    console.log(files[i]);
	}
    });
  }
};
run(process.argv.slice(2));	
