// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
//arr1.forEach(funciton(첫번째,두번째,세번째))
// 첫번째 매개변수(필수) =>순회할 때 들어있는 값과 연결되어있다.
// 두번째 매개변수 => 순회할 때의 값의 인덱스 번호가 연결되어있다.
// 세번째 매개변수 => 원본에 접근가능
arr1.forEach(function (item, idx, arr) {
     console.log("forEach = "+idx, item * 2);
});
let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);//인덱스번호 적용X
console.log("includes = "+isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드

let arr3 = [2, 2, 2];
let index1 = arr3.indexOf(2);//배열에 동일한 값이 있는 경우 값의 맨 처음에 나오는 위치의 인덱스를 가져온다.
console.log(index1);

let arr3_1 = [2, 3, 5];
let index2 = arr3_1.indexOf(3);//배열의 값과 비교하여 같은 값의 위치를 인덱스에 가져온다.
console.log(index2);

let index3 = arr3_1.indexOf(1);//배열의 값과 비교하여 같은 값이 없는 경우 인덱스를 -1로 가져간다.
console.log(index3);

console.log("===================");
 let objectArr = [
   { name: "이정환" },
   { name: "홍길동" },
 ];
// key가 포함된 배열의 값은 indexOf로 인덱스번호를 가져올 수 없다.
let objectarr = [1,3,5]
 console.log(
  objectarr.indexOf(3),"<=일반 배열_objectarr_key 배열=>",
   objectArr.indexOf({ name: "이정환" })
 );

 console.log(
   objectArr.findIndex(
     (item) => item.name === "이정환"
   )
 );
 console.log("===================");
// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex(
  (item) => item === 999 //배열에 없는값 => -1
);

console.log(findedIndex);

//문제> 주어진 데이터 중에서 2의 배수인것을 찾아서 인덱스로 출력하세요.
//data> 55, 100,33
console.log("문제>")
// 1. forEach
let arr44 = [55,100,33];
arr44.forEach(function (check,idx){
  if(check % 2==0){
  console.log("forEach : "+idx);
  }
});
// 2. includes
let indexOF =null;
for(let i =0;i<arr44.length;i++){
  if(arr44[i] % 2 == 0){
    console.log("indexOf : "+arr44.indexOf(arr44[i]));
  }
}
console.log("==================");



// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
  { name: "이정환" },
  { name: "홍길동" },
];

const finded = arr5.find(
  (item) => item.name === "이정환"
);
console.log(finded);
