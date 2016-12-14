/*
eslint-disable no-console
 */

var counter1 = require('./counter');
var    counter2 = require('./counter');

//同一入口的多次require只会初始化一次
console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());