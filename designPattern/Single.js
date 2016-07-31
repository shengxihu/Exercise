var createLoginLayer = (function(){
	var div
	return function(){
		if(!div){
			div=document.createElement('div')
			div.innerHTML = '我是登录悬浮框！'
			div.style.display = 'none'
			document.body.appendChild(div)
		}
		return div
	}
})()
document.getElementById('bt').onclick = function(){
	var loginLayer = createLoginLayer()
	loginLayer.style.display = 'block'
}