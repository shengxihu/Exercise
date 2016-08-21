var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model("User",{
	title:String,
	author:String,
	link:String,
	time:String,
	desc_arr:String
})

exports = User;