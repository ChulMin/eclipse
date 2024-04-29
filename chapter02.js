// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

let a = true;
let b = false;

//if( a || b ){
  console.log("==========================");
if( a && b ){  
  console.log("OR");
}
else{
  console.log("AND");
}
console.log("==========================");
function returnFalse1(){
  console.log("False1_function");
  return undefined;
}
function returnFalse2(){
  console.log("False2_function");
  return null;
}
function returnTrue1(){
  console.log("True1_function");
  return 10000;
}
function returnTrue2(){
  console.log("True2_function");
  return 20000;
}
console.log("and1_True_False-----------------------------");//둘 중 1개만 True
console.log(returnTrue1() && returnFalse1());
//실행은 and, 결과는 false이기에 and = 연산자 2개의 함수 출력 후, 결과 = return값이 false인 undefined를 출력
console.log("and1_True_False-----------------------------");

console.log("and2_False_and_False-----------------------------");//둘다 false
console.log(returnFalse1() && returnFalse2());
//실행은 and, 결과는 false이기에 and = 연산자 2개의 함수 출력 후, 결과 = return값이 false인 undefined를 출력
console.log("and2_False_and_False-----------------------------");

console.log("and3_True_and_True-----------------------------");//둘다 True
console.log(returnTrue1() && returnTrue2());
//실행은 and, 결과는 True이기에 and = 연산자 2개의 함수 출력 후, 결과 = 첫번째 함수의 return값인 20000을 출력
console.log("and3_True_and_True-----------------------------");

console.log("==============================================================================");

console.log("or1_True_or_False-----------------------------");
console.log(returnTrue() || returnFalse());//True가 하나라도 있으면 True함수 실행,
//실행은 or, 결과는 True이기에 or = True인 함수 출력 후, 결과 = return값이 false인 undefined를 출력
console.log("or1_True_or_False-----------------------------");

console.log("or2_False_or_False-----------------------------");
console.log(returnFalse2() || returnFalse());//둘다 false임으로 false 순서대로 둘다 실행,
//실행은 or, 결과는 둘다 false이기에 or = 두개의 함수 출력 후, 결과 = 첫번째 함수의 return값인 undefined를 출력
console.log("or2_False_or_False-----------------------------");
console.log("or3_True_or_True-----------------------------");
console.log(returnFalse2() || returnFalse());//둘다 false임으로 false 순서대로 둘다 실행,
//실행은 or, 결과는 둘다 false이기에 or = 두개의 함수 출력 후, 결과 = 첫번째 함수의 return값인 undefined를 출력
console.log("or3_True_or_True-----------------------------");
printName();
printName({ name: "이정환" });
