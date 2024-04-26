// 1. 대입 연산자
let var1 = 1;
console.log(var1);
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
console.log(num1,num2,num3,num4,num5);
let num6 = (1 + 2) * 10;
console.log(num6);//30

let num6_1 = 1 + (2 * 10);
console.log(num6_1);//21

// 3. 복합 대입 연산자
console.log("복합 대입 연산자");//30
let num7 = 10;
num7 += 20;//30
console.log(num7);
num7 -= 20;//10
console.log(num7);
num7 *= 20;//200
console.log(num7);
num7 /= 20;//10
console.log(num7);
num7 %= 10;//0
console.log(num7);
// 4. 증감 연산자
console.log("증감 연산자");//30
let num8 = 10;
console.log(num8);//10
++num8;
console.log(num8);//11
num8++;
console.log(num8);//12

console.log(num8--);//12
console.log(num8);//11
console.log(--num8);//10
// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

// 6. 비교 연산자

// ==는 Equal Operator
// ==는 a == b 라고 할때, a와 b의 값이 같은지를 비교해서,
// 같으면 true, 다르면 false라고 한다.(값만 같으면 true이다.)

// ===는 Strict Equal Operator, (Strict, 즉 엄격한 Equal Operator)
// ===는 a === b 라고 할때, 값과 값의 종류(Data Type)가 모두 같은지를 비교해서,
// 같으면 true, 다르면 false라고 한다. 

let comp1 = 1 === "1";
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;

