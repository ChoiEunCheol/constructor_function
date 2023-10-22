// 생성자 함수
// 생성자 함수는 일반 함수와 비슷하게 선언한다.
// 생성자 함수에서 this는 생성된 인스턴스 가리킴
// 생성자 함수는 인스턴스 생성 -> 초기화 -> 반환의 과정을 거침
// return문은 생략

function Person(name, age){
    this.name = name;
    Person.age = age;
    console.log(this);

    // this.hi = ()=>{
    //     console.log(this.name + " ㅎㅇ");
    // }
};


//생성자 함수는 객체를 쉽게 생성하는 역할
let person1 = new Person("헨니",26);

console.log(person1);
// person1.hi();