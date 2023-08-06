/* 문자열 타입
    자바스크립트 문자열 리터럴 표기법은 3가지를 제공
    ("", '', ``)
*/

var string;
string = 'JavaScript';
string = "JavaScript";
string = `JavaScript`;

console.log(string);
console.log(typeof(string));

/* '', "" 는 내부에 교차해서 사용할 때 사용 */
string ='작은 따옴표로 감싼 문자열 내의 "큰 따옴표"';
console.log(string);

/* `` 템플릿 리터럴
    ES6 부터 도입 된 멀티 라인 문자열, 
    표현식 삽입 등의 편리한 문자열 처리를 제공하는 표기법.
*/

var str = "안녕하세용\n 반갑습니다.";
var str = `안녕하세용
반갑습니다.`;
console.log(str);

var firstName = "홍";
var lastName = "평훈";

console.log(`제 이름은 ${firstName}${lastName} 입니다.`);