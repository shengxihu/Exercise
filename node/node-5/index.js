var cheerio = require('cheerio');  
var request = require('sync-request');  
var fs = require('fs');

url = 'https://movie.douban.com/subject/10535568/?from=subject-page'; //这里是举个例子而已，豆瓣的具体的电影网址可以自己替换
var html = '';
html = request('GET', url).getBody().toString();

function handleDB(html){
  var $ = cheerio.load(html); //引入cheerio的方法。这样的引入方法可以很好的结合jQuery的用法。
  var info = $('#info');
  // 获取电影名
  var movieName = $('#content>h1>span').filter(function(i,el){
    return $(this).attr('property') === 'v:itemreviewed';
  }).text();
  // 获取影片导演名
  var directories = '- 导演：' + $('#info span a').filter(function(i,el){
    return $(this).attr('rel') === 'v:directedBy';
  }).text();
  // 获取影片演员
  var starsName = '- 主演：';
  $('.actor .attrs a').each(function(i,elem){
      starsName += $(this).text() + '/';
  });
  // 获取片长
  var runTime = '- 片长：' + $('#info span').filter(function(i,el){
    return $(this).attr('property') === 'v:runtime';
  }).text();
  // 获取影片类型  
  var kind = $('#info span').filter(function(i,el){
    return $(this).attr('property') === 'v:genre'
  }).text();
    // 处理影片类型数据
  var kLength = kind.length;
  var kinds = '- 影  片类型：';
  for (i = 0; i < kLength; i += 2){
    kinds += kind.slice(i,i+2) + '/';
  }
  // 获取电影评分和电影评分人数
    // 豆瓣
  var DBScore = $('.ll.rating_num').text();
  var DBVotes = $('a.rating_people>span').text().replace(/\B(?=(\d{3})+$)/g,',');
  var DB = '- 豆  瓣评分：' + DBScore + '/10' + '(' + 'from' + DBVotes + 'users' + ')';
    // IMDBLink
  IMDBLink = $('#info').children().last().prev().attr('href');
    
  var data = movieName + '\r\n' + directories + '\r\n' + starsName + '\r\n' + runTime + '\r\n' + kinds + '\r\n'+ DB +'\r\n';
  // 输出文件
  fs.appendFile('dbmovie.txt', data, 'utf-8', function(err){
    if (err) throw err;
    else console.log('大体信息写入成功'+'\r\n' + data)
  });
}
handleDB(html);