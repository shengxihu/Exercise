class Iterator {
  	constructor(start, stop) {
    	this.value = start;
    	this.stop = stop;
  	}
  	[Symbol.iterator]() { return this; }

  	next() {
    	var value = this.value;
    	if (value < this.stop) {
      		this.value++;
      		return {done: false, value: value};
    	} else {
      		return {done: true, value: undefined};
    	}
  	}
}
function range(start, stop) {
	console.log(`起:${start},止:${stop}`)
  	return new Iterator(start, stop);
}
for(var value of range(1,9)){
  	console.log(value)
}
