// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1000; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
  console.log(b);
}

funcA();
function funcB() {
  let b = 200;
  console.log(a);
  console.log(b);
}

function funcC() {

}
funcC();

// if statement

if (true) {
  let c = 1; // local scope
}

for (let i = 0; i < 10; i++) {
  let d = 1; //local scope
}
// console.log(d);// error
// console.log(i);// error

// 1000 + 5000 = 6000
function funcD(value){
 sum = value + 5000;// 변수 sum = 전역 스코프
 console.log(sum);// 6000
}

 funcD(1000);
 console.log(typeof(sum));