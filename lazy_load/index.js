function resgisterListener(event,func){
	if(window.addEventListener){
		window.addEventListener(event,func);
	} else {
		window.attachEvent('on'+event,func);
	}
}

function lazyLoad(){
	var lazy=document.getElementsByClassName('lazy')
	for(var i=0; i<lazy.length; i++){
		if(isInViewport(lazy[i])){
           lazy[i].src =
            lazy[i].getAttribute('data-src');
        }
	}
}

function isInViewport(el){
    var rect = el.getBoundingClientRect();
	return (
	    rect.bottom >= 0 && 
	    rect.right >= 0 && 

	    rect.top <= (
	    window.innerHeight || 
	    document.documentElement.clientHeight) && 

	    rect.left <= (
	    window.innerWidth || 
	    document.documentElement.clientWidth)
	 );
}

resgisterListener('load', lazyLoad);

document.addEventListener('scroll', lazyLoad);
