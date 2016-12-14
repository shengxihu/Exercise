// function isInViewport(el){
//     var rect = el.getBoundingClientRect();
// 	return (
// 	    rect.bottom >= 0 && 
// 	    rect.right >= 0 && 

// 	    rect.top <= (
// 	    window.innerHeight || 
// 	    document.documentElement.clientHeight) && 

// 	    rect.left <= (
// 	    window.innerWidth || 
// 	    document.documentElement.clientWidth)
// 	 );
// }
// function removeNode(){
// 	var box_flag=document.getElementById('box-flag');
// 	if (isInViewport(box_flag)) {
// 		var box=document.getElementsByClassName('box');
// 		box[0].parentNode.removeChild(box[0]);
// 	}
// }
// document.addEventListener('scroll', removeNode);