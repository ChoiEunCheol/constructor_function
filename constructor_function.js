// 생성자 함수
// 생성자 함수는 일반 함수와 비슷하게 선언한다.
// 생성자 함수에서 this는 생성된 인스턴스 가리킴

function Person(name, age){
    Person.name = name;
    this.age = age;
};


//생성자 함수는 객체를 쉽게 생성하는 역할
let person1 = new Person("헨니",26);

console.log(person1);