/* 숫자 타입으로 변환 */

// 1. Number 생성자 함수를 new 연산자 없이 호출

Number();
console.log(typeof Number('10'));
console.log(Number(true));

// 2. parseInt, parseFloat 함수를 이용
console.log(typeof parseInt('10'));
console.log(parseInt('10.01'));

// 3. 산술연산자 이용
console.log(typeof ('10' * 1));