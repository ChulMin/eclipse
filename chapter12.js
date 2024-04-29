// 1. 함수 표현식
function funcA() {
     console.log("funcA");
}

let varA = funcA;
varA();

// 익명함수
let varB = function () {
     console.log("funcB");
};

varB();
 let varD = function () {
   varA();
  console.log("funcA = "+varA());
  
 };
let varE = varD || varA;
console.log("-----------------");
varE();
console.log("-----------------");


// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};
let varF = () => {
  return 1000;
};
console.log(varF());

console.log(varC(10));
