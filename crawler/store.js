var fs=require('fs');
function store(data,page){
	for(var i=0;i<data.title.length;i++){
		((i) => {
			var obj={};
			obj.title=data.title[i];
			obj.author=data.author[i];
			obj.link=data.link[i];
			obj.time=data.time[i];
			obj.scan=data.scan[i];
			obj.desc_arr=data.desc_arr[i];
			fs.appendFile('./store/segmentfaultBlog'+(page+1)+'.json',JSON.stringify(obj),"utf-8",function(err){
				if (err) {
					throw err;
				} else {
					console.log("第"+(page+1)+"页第"+(i+1)+"条数据写入成功！")
				}
			})
		})(i)
	}
}
exports.store=store;