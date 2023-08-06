// 매개변수와 인자(인수)

function hello(name) {

    console.log(name);

    console.log(arguments);

    return `${name}님 안녕하세요~`;
};

// 매개변수는 함수 내부에서만 사용이 가능하다.
// console.log(name);

var result = hello('너구리');
console.log(result);

result = hello();
console.log(result);

// 초과되는 인자는 무시된다.
result = hello('너구리', '탱구리');
console.log(result);

// 매개변수에 = '' 로 선언하면 전달받은 인자가 없으면 미리 선언한 값이 출력된다.
function hi(name = '너구리') {
    return `${name} 안녕탱`;
}

result = hi();
console.log(result);
