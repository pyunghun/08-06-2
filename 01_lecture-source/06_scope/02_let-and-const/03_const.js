/* const 키워드로 선언한 변수는 반드시 언언과 동시에 초기화 해야한다.\
    cosnt x; 이게 안 되는 것.
*/

const x = 1;

//  const 키워드로 선언한 변수는 재할당이 금지된다.
// x = 2;


// 상수 표기법 read only
const DISCOUNT_RATE = 0.15;

// 값을 변경해야 할 시에 let으로 선언한다.
let price = 15000;

const discountPrice = price * (1 - DISCOUNT_RATE);
console.log(discountPrice);

price = 10000;

/* 주의 사항 */
const student = {
    name: '팽구',
    age: 20
};

console.log(student);

// 프로퍼티의 값은 변경될 수 있다.
student.name = '링구';
console.log(student);

student = {};