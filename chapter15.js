// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  extra: {}, //객체형태 표기
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;// 점 표기법
console.log(name);
console.log("-----------------");
let age = person["age"];// 괄호 표기법
console.log(age);
console.log("-----------------");
let property = "hobby";
let hobby = person[property];// 변수대입 + 괄호 표기법
console.log(hobby);
console.log("-----------------");
// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";// 추가
console.log(person["favoriteFood"]);
console.log(person["job"]);
console.log("-----------------");
// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";//수정
person["favoriteFood"] = "초콜릿";//수정
console.log(person["favoriteFood"]);
console.log(person["job"]);
console.log("-----------------");
// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];//삭제
console.log(person["favoriteFood"]);//삭제
console.log(person["job"]);
console.log("-----------------");
// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
let result3 = "favoriteFood" in person;
let result4 = "job" in person;
console.log(result1);// name
console.log(result2);// cat
// 삭제된 변수의 값
console.log(result3);// favoriteFood
console.log(result4);// job

