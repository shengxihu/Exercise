function dataParse(data,page){
	var arr=[];
	for(var i=0;i<data.title.length;i++){
		((i) => {
			var obj={};
			obj.title=data.title[i];
			obj.author=data.author[i];
			obj.link=data.link[i];
			obj.time=data.time[i];
			obj.scan=data.scan[i];
			obj.desc_arr=data.desc_arr[i];
			arr.push(obj);
		})(i)
	}
	return arr;
}
exports.dataParse=dataParse;