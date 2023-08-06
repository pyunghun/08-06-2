/* Symbol 
    변경 불가능한 원시 타입의 값
    다른 값과 중복되지 않는 유일한 값
*/

var key = Symbol('key');
console.log(key);
console.log(typeof(key));

/* 객체 */
var obj = {};

obj[key] = 'value';
console.log(obj);