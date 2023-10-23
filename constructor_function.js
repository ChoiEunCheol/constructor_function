// 생성자 함수
// 생성자 함수는 일반 함수와 비슷하게 선언한다.
// 생성자 함수에서 this는 생성된 인스턴스 가리킴
// 생성자 함수는 인스턴스 생성 -> 초기화 -> 반환의 과정을 거침
// return문은 생략

// function Person(name, age) {
//   this.name = name;
//   Person.age = age;
//   console.log(this);

//   // this.hi = ()=>{
//   //     console.log(this.name + " ㅎㅇ");
//   // }
// }

// //생성자 함수는 객체를 쉽게 생성하는 역할
// let person1 = new Person("헨니", 26);

// console.log(person1);
// // person1.hi();

// --------------------------------------
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(this.name);
//   }
// }

// // 사용법:
// let user = new User("Hennie");
// user.sayHi();

// --------------------------------------
// 위의 생성자 함수를 클래스로 변환
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     Person.age = age;
//     console.log(this);
//   }
// }

// 메모리 사용에 있어서는 클래스가 효율적
// 생성자 함수가 보안에 유리할 수 있음 -> 이유 알아보기는 과제
// 상황에 맞춰서 사용

// function makeObjectTwo(a,b,c){
//   this.id = a;
//   this.password = b;
//   this.email = c;
// }

// let result = new makeObjectTwo("아이디테스트", "패스워드테스트", "이메일테스트");

// console.log(result);

// ---------------------------------------

class makeObjectTwo {
  constructor(a, b, c) {
    this.id = a;
    this.password = b;
    this.email = c;
  }
}

let result = new makeObjectTwo("아이디테스트", "패스워드테스트", "이메일테스트");

console.log(result);

// ---------------------------------------
