/* 함수 선언문 */

            
function hello(name) {
    return `${name}님 환영탱구리`;
};

hello('너구리');

console.log(hello('너구리'));

// 함수를 변수에 저장
var hello2 = function(name) {
    return `${name}님 안녕하세요`;
};

console.log(hello2('탱구리'));