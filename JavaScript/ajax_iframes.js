var mySrc = "http://a.目标网址.com:9000/myIframe.html";

document.domain = "music.163.com";     //关键代码，将域提升到根域

$("body").append('<iframe src=' + mySrc + ' name="myIframe" id="getData"></frame>');     //向目标网页插入iframe

var interval;

function start() {
    $("#getData").attr({"src": mySrc});
    interval = setInterval(function() {
        window.myIframe.run(getLogitic);    //向子域传入回调函数        
    },10000)
}

function stop() {
    clearInterval(interval);
}

function getLogitic(orderId) {
    $.ajax({
        url: '/query?'+ orderId +'&id=1&valicode=&temp=' + Math.random(),
        method: 'GET',
        success: function(res) {
            console.log(res);              //可以在此再调用子域的方法，向本地文件传输数据
        },
        error: function(err) {
            console.log('err: ', err);
        }
    })
}
