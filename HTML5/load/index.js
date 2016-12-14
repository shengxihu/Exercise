Vue.directive('load', {
    isFn : true,
    acceptStatement:true,
    bind : function() {
         
    },
    update : function(fn) {
	    if(typeof fn !== 'function') {
	    //判断事件参数是否为函数
	        return console.error('The param of directive "v-tap" must be a function!');
	    }
	    window.addEventListener('load', fn,false) 
	}
});