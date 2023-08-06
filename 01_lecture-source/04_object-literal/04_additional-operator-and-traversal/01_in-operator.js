var student = {
    name:'너구리',
    age: 30,
    test: undefined
};

console.log(student.name === undefined);
console.log(student.height === undefined);
console.log(student.test === undefined);

// 특정 프로퍼티가 있는 지 확인하는 in
console.log("name" in student);