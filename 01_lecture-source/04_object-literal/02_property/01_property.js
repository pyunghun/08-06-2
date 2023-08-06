/* 객체는 프로퍼티의 집합이다
    프로퍼티는 키와 벨류로 구성된다.
*/

var student = {
    name: '조팽구리',
    age: 30
};

console.table(student);

/* 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심볼  => 프로퍼티 값에 접근하기 위한 식별자 */
var obj = {
    normal: 'normal value',
    '@ s p a c e @': 'space value',
    '': '',                     // 권장하지 않는다.
    0:1,                        // 숫자 키는 내부적으로 형변환을 한다.
    normal: 'new value'         // 이미 존재하는 키를 중복 선언하면 나중에 선언한 프로퍼티로 덮어쓴다.
};

console.table(obj);

var key = 'test';

// obj.key = 'test value'; 참조 연산자를 이용하여 객체에 프로퍼티를 추가한다.
obj[key] = 'test value';
// [] 를 사용하여 변수의 이름을 key로 사용한다.
obj['key'] = 'test value';


// console.log(obj.'@ s p a c e @');
// 공백 문자가 키 값이면 참조연산자로 접근할 수 없다.
// 따라서
console.log(obj['@ s p a c e @']);
console.log(obj);
