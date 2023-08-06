/* 중첩 함수 */

function outer() {

    var outerVal = '외부함수';

    function inner() {
        var innerVal = '내부함수';

        console.log(outerVal, innerVal);
    }

    inner();
}

outer();

// inner() 는 outer() 함수 내부에서만 사용이 가능하다.
// inner();