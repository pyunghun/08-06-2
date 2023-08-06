/* 재귀 함수
    함수가 자기 자신을 호출하는 것을 재귀 호출이라고 한다.
*/

// 팩토리얼

function factorial(n) {

    // 함수가 끝나는 조건 작성 필요
    if(n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));