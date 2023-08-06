/* 배열 메소드 */

const arr = [];
console.log(arr.constructor === Array);
console.log(Object.getPrototypeOf(arr) === Array.prototype);

const foodList = ['물회', '삼계탕', '너구리', '수박', '물회'];

// Array.prototype.indexOf : 배열에서 요소가 위치한 인덱스를 리턴해준다.
// 탐색을 마치면 더이상 진행을 하지 않는다. 따라서 4번 인덱스 번호는 리턴하지 않는다.
console.log(`foodList.indexOf('물회') : ${foodList.indexOf('물회')}`);

// 찾는 위치 지정
console.log(`foodList.indexOf('물회', 1) : ${foodList.indexOf('물회', 1)}`);

console.log(`foodList.lastIndexOf('물회') : ${foodList.lastIndexOf('물회')}`);

console.log(`foodList.includes('물회') : ${foodList.includes('물회')}`);
console.log(`foodList.includes('너굴') : ${foodList.includes('너굴')}`);