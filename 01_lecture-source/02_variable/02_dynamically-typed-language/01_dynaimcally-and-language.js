// 정적 타입 언어(static/strong typed language)

// java, c++
// 변수를 선언할 때 데이터 타입을 사전에 선언
// 변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당 가능.
// 컴파일 시점에 타입 체크를 수행하는데 타입의 일관성을 강제하여 런타임 에러를 줄인다.

// 동적 타입 언어(dynamically/weak typed language)

// js, python
// 타입을 변수를 선언할 시 사용하지 않는 언어
// 선언이 아닌 할당에 의해 타입이 결정되는 언어(타입 추론)
// 재할당에 의해 변수 타입을 언제든지 동적으로 변경 가능
// 변수의 값이 언제든 변경될 수 있기 때문에 값을 확인하기 전에는 타입에 대한 확신이 없다.
// 유연성은 높으나 신뢰성이 떨어짐
// 변수 사용 전 데이터 타입 체크가 필요하기도 하다.

var test;
console.log(test);
console.log(typeof(test));

test = 1;
console.log(test);
console.log(typeof(test));

test = 'java';
console.log(test);
console.log(typeof(test));

test = null;
console.log(test);
console.log(typeof(test));

test = {}
console.log(test);
console.log(typeof test);

test = [1,2,3];
console.log(test);
console.log(typeof test);

// 변수에 함수를 저장할 수 있다.
// test() 이렇게 변수에 저장 된 함수를 호출할 수 있다.
test = function() {};
console.log(test);
console.log(typeof test);