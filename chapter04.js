// 1. 변수 let
let age;// 재할당 가능 

age = 30;
console.log(age);
age = 300;
console.log(age);
let age2 = 25;
console.log(age2);


// 2. 상수 const
const birth = "1997.01.07";
console.log(birth);

/*
 birth = "2024.04.26";
 console.log(birth);
*/
let x = 10;
if(true){
    let y = 20;
    console.log(x);
    console.log(y);
}
console.log(x);
//console.log(y);

const PI = 3.14;
 //PI = 3.14555; PI는 값을 변경 불가함.

const person ={name: '홍길동'};
person.name = '현대빈';
person.age = 300;
//const person ={name: '김형기'};
const person2 ={name: '김형기'};
console.log(person2);


// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;
let $name;
let _name;
let name;
//let %name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;
//let 1name;

// 3-3. 예약어를 사용할 수 없다.
//let, const,if,for...


// 4. 변수 명명 가이드
// 확실한 의미를 부여한 코드를 작성해야 합니다.
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
