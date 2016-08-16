var cheerio=require("cheerio");
var request=require("sync-request");
var fs=require("fs");
var User = require("./user.js");
var src="https://segmentfault.com/blogs?page=";
for(var j=1;j<200;j++){
	(function(){
		var url=src+j;
	var html=request('GET',url).getBody().toString();
	console.log("向第"+j+"页发出请求！")
	var $ = cheerio.load(html);
	var desc_arr=new Array();
	var link=new Array();
	var title=new Array();
	var author=new Array();
	var time=new Array();
	var scan=new Array();
	$(".stream-list__item").each(function(i,elem){
		desc_arr[i]=$(this).children(".summary").children("p").text().replace(/\ +/g,"").replace(/[\r\n]/g,"");
	});
	$(".stream-list__item").each(function(i,elem){
		var prev="https://segmentfault.com";
		link[i]=prev + $(this).children(".summary").children("h2").children("a").attr("href").replace(/\ +/g,"").replace(/[\r\n]/g,"");
	});
	$(".stream-list__item").each(function(i,elem){
		title[i]=$(this).children(".summary").children("h2").children("a").text().replace(/\ +/g,"").replace(/[\r\n]/g,"");
	});
	$(".stream-list__item").each(function(i,elem){
		author[i]=$(this).children(".summary").children("ul").children("li").children("a").first().text().replace(/\ +/g,"").replace(/[\r\n]/g,"");
	});
	$(".stream-list__item").each(function(i,elem){
		text=$(this).children(".summary").children("ul").children("li").last().children().text().replace(/\ +/g,"").replace(/[\r\n]/g,"").replace(/发布于/g,"");
		time[i]=$(this).children(".summary").children("ul").children("li").last().text().replace(/\ +/g,"").replace(/[\r\n]/g,"").replace(/发布于/g,"").replace(text,"");
	});
	$(".stream-list__item").each(function(i,elem){
		scan[i]=$(this).children(".blog-rank").children(".views").text().replace(/\ +/g,"").replace(/[\r\n]/g,"");
	});
	var res={};
	for(var i=0;i<title.length;i++){
		var data={};
		data.title=title[i];
		data.author=author[i];
		data.link=link[i];
		data.time=time[i];
		data.scan=scan[i];
		data.desc_arr=desc_arr[i];
		fs.appendFile('segmentfaultBlog.json',JSON.stringify(data),"utf-8",function(err){
			if (err) {
				throw err;
			} else {
				console.log("第"+j+"页第"+i+"条数据写入成功！")
			}
		})
		var item = new User(data);
		item.save(function(err){
			if (err) {throw err}
				console.log("存入数据库成功！")
		})
		User.find({ title: "大数据分页方案" }, function(err, user) {
		  if (err) throw err;

		  console.log(user);
		});
	}
})(j)
}