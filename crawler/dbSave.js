var User = require("./user.js");
function dbSave(data,page){
	for(var i=0;i<data.title.length;i++){
		((i) => {
			var obj={};
			obj.title=data.title[i];
			obj.author=data.author[i];
			obj.link=data.link[i];
			obj.time=data.time[i];
			obj.scan=data.scan[i];
			obj.desc_arr=data.desc_arr[i];
			var item = new User(obj);
			item.save(function(err){
				if (err) {throw err}
					console.log("第"+(page+1)+"页第"+(i+1)+"条数据存入数据库成功！")
			})
		})(i)
	}
}
module.exports.dbSave=dbSave;