/* for in 반복문 
    객체의 모든 프로퍼티를 순회
*/

var student = {
    name:'너구리',
    age: 30,
    getInfo: function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

// for(var i = 0; i < 10; i++) {}
for(var key in student) {
    console.log(`key : ${key}`);
    console.log(`value : ${student[key]}`);
};
