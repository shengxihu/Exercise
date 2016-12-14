/*
var EventEmitter = require('events').EventEmitter;
var myEmitter = new EventEmitter();

var connection = function (id){
	console.log('client id:'+id);
}
myEmitter.on('connection',connection);
myEmitter.emit('connection',6);
*/

var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Radio = function(station){
	var self = this;
	setTimeout(function(){
		self.emit('open',station);
	},0);
	setTimeout(function(){
		self.emit('close',station);
	},5000);
	this.on('newListener',function(listener){
		console.log('Event Listener:'+listener);
	});
}
util.inherits(Radio,EventEmitter);
module.exports = Radio;