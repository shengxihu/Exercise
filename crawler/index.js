var handleHtml=require("./handleHtml").handleHtml;
var store=require("./store").store;
var dbSave=require("./dbSave").dbSave;
var html=require("./ajax").ajax;
var server=require("./server").server;
var dataParse=require("./dataParse").dataParse;
var res;
var flag = false;

for(var page=0;page<20;page++){
	(function(page){
		function test(data,page){
			res=handleHtml(data,page);
			store(res,page);
			dbSave(res,page);
			var bd=dataParse(res, page)
			server(bd,flag,page);
			flag = true;
		}
		html(test,page);
	})(page)
}

