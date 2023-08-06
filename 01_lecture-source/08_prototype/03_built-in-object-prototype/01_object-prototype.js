/**
 * 같은 의미
 * const obj = new Object();
 * const obj = {};
 */

const obj = {};

console.log(obj.__proto__ === Object.prototype);
console.log(obj.toString === obj.__proto__.toString);
console.log(obj.toString === Object.prototype.toString);