const user = {
    id:'너굴',
    login: function() {
        console.log(`${this.id}님이 로그인 되었습니다`);
    }
};

const student = {
    __proto__: user
};

// 아이디를 동적으로 프로퍼티에 추가함.
student.id = '너굴맨';

student.login();

console.log(user);

console.log(student);

for(let prop in student) {
    console.log(prop);

    const isOwn = student.hasOwnProperty(prop);
    console.log(isOwn);
};