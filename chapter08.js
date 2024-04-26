// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자
//null은
console.log("null & undefined-------");
// undefined는 의도적으로 변수에  값이 할당된 적이 없다는 뜻입니다.
let var1;
console.log(var1);

// null은 의도적으로 변수에 값이 없다는 것을 명시할 때 사용합니다.
let var1_1 = null;
console.log(var1_1);

console.log("-------");
let var2 = 100;
let var3 = 200;

let var4 = var1 ?? var2;
console.log(var4);
let var5 = var1 ?? var3;
console.log(var5);

//자료형이 첫번째 같다면 첫번째 인자 값을 넣는다.
console.log("-------");
let var6 = var2 ?? var3;
console.log(var6);
console.log("-------");
    var6 = var3 ?? var2;
console.log(var6);
console.log("-------");

let userName;
let userNickName = "Winterlood";
console.log(userNickName);
let displayName = userName ?? userNickName;
console.log(displayName);
console.log("-------");

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
console.log("typeof-----");
let var7 = 1;
console.log(var7);
console.log(typeof(var7));
console.log("-----");
var7 = "hello";
console.log(var7);
console.log(typeof(var7));
console.log("-----");
var7 = true;
console.log(var7);
console.log(typeof(var7));
console.log("-----");
let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;



// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
