// 1. 배열 생성
console.log("arrC----------------------------");
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)
let arrC =[100,200,300];
console.log(arrC);
console.log("--------------------------------");
console.log("arrD----------------------------");
let arrD = [ 1, 2, 3,'A', true, "hello", null, undefined, () => {}, {}, [],];
console.log(arrD);
console.log("--------------------------------");
// 2. 배열 요소 접근
console.log("arrC[0] => item1----------------------------");
let item1 = arrC[0];
let item2 = arrC[1];
console.log(item1);
console.log("arrC[1] => item2----------------------------");
console.log(item2);
console.log("--------------------------------");
arrC[0] = "hello";
console.log(arrD);
