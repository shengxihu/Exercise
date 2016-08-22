var handleHtml=require("./handleHtml").handleHtml;
var store=require("./store").store;
var dbSave=require("./dbSave").dbSave;
var html=require("./ajax").ajax;
var res;
for(var page=0;page<20;page++){
	(function(page){
		function test(data,page){
			res=handleHtml(data,page);
			store(res,page);
			dbSave(res,page);
		}
		html(test,page);
	})(page)
}

