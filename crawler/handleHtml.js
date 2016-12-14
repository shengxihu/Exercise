var cheerio=require("cheerio");
var fs=require('fs');

function handleHtml(input,page){
	var $ = cheerio.load(input);
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
	var res={
		'title':title,
		'author':author,
		'link':link,
		'time':time,
		'scan':scan,
		'desc_arr':desc_arr
	};
	return res;
}
exports.handleHtml=handleHtml;