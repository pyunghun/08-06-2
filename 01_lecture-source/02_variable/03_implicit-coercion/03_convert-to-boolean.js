// 논리타입으로 변환
// 자바스크립트 엔진은 boolean 타입이 아닌 
// Truthy 값 또는 Falsy값 으로 구분한다.
// Truthy -> true , Falsy -> false 로 암묵적 타입 변환이 된다.

if(true) {
    console.log('if(true)');
}

if(false) {
    console.log('if(false)');
}

if(undefined) {
    console.log('if(undefinded');
}

if(null) {
    console.log('if(null)');
}

if(0) {
    console.log('if(0)');
}