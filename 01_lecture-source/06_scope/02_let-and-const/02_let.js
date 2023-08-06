/* 1. 변수를 중복 선언하는 것이 금지 */
let msg = '해위';
console.log(msg);
// let msg = '하잉';
console.log(msg);

/* 2. 블록 레벨 스코프 */
let i = 0;
for(let i = 0; i < 10; i++) {
    console.log(`지역변수 i : ${i}`);
}
console.log(i);

/* 3. 변수 호이스팅 */
console.log(x);
let x = 10;