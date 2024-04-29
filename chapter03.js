// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one);
//console.log(arr[0]);
console.log(two);
//console.log(arr[1]);
console.log(three);
//console.log(arr[2]);
console.log(four);
console.log(arr);


// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

let {
  age: myAge,
  hobby,
  name,
  extra = "hello",
} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
console.log(person,extra);
console.log(person.name,person.age,person.hobby,extra);
console.log({age: myAge, hobby, name, extra = "hello"} = person);
