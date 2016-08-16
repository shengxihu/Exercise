var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on("error",console.error.bind(console,"connection error:"));
db.once("open",function(){
	console.log("连接到数据库！")
})

var catSchema=mongoose.Schema({
	name:String
})

catSchema.methods.speak=function(){
	var greeting = this.name ? "Meow name is " + this.name : "I don't have a name!";
	console.log(greeting);
}

var Cat = mongoose.model('Cat', catSchema);

var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Add a new cat!');
    kitty.speak();
  }
});
Cat.find(function(err,cats){
	if (err) {
		return console.log(err);
	} else {
		console.log(cats);
	}
})