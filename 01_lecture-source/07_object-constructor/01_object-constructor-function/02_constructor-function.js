// 객체 리터럴에 의한 객체 생성
const student =  {
    name:'너굴맨',
    age: 20,
    getInfo: function() {
        return `${this.name}은(는) ${this.age}세 입니다.`;
    }
};

const student2 = {
    name:'너굴걸',
    age:23,
    getInfo: function() {
        return `${this.name}은(는) ${this.age}세 입니다.`;
    }
};

// 생성자 함수에 의한 객체 생성
function Student(name , age) {
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
}

const student3 = new Student('너구리구리', 23);
const student4 = new Student('너군위', 23);
const student5 = new Student('너구링구', 23);
const student6 = new Student('너구', 23);

console.log(student3);
console.log(student4);
console.log(student5);
console.log(student6);