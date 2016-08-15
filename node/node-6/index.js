var cheerio=require("cheerio");
var request=require("sync-request");
var fs=require("fs");
var src="https://segmentfault.com/blogs?page=";
for(var j=1;j<200;j++){
	(function(){
		var url=src+j;
	var html=request('GET',url).getBody().toString();
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
	for(var i=0;i<title.length;i++){
		var data="";
		data=title[i] + '\r\n' + author[i] + '\r\n' + link[i] + '\r\n' + time[i] + '\r\n' + scan[i] + '\r\n' + desc_arr[i] + '\r\n' + '\r\n' + '\r\n';
		fs.appendFile('segmentfaultBlog.text',data,"utf-8",function(err){
			if (err) {
				throw err;
			} else {
				flag=true;
			}
		})
		console.log("第"+j+"页第"+i+"条数据写入成功！")
	}
})(j)
}
