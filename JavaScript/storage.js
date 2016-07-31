if (window.sessionStorage) {
	console.log("Support sessionStorage");
} else {
	console.log("Not support sessionStorage");
}
if (window.localStorage) {
	console.log("Support localStorage");
} else {
	console.log("Not support localStorage");
}
sessionStorage.setItem('text','Shengxihu is handsome');
sessionStorage.name='Shengxihu';
localStorage.setItem('text','Shengxihu is handsome');
localStorage.name='Shengxihu';
localStorage.clear();
sessionStorage.removeItem('text');
console.log(sessionStorage.text);
console.log(sessionStorage.name);
console.log("---------------------------");
console.log(localStorage.text);
console.log(localStorage.name);