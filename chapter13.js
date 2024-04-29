// 1. 콜백함수
//함수를 사용할 때, 반복적인 코드 부분이 존재하는데,
//이를 중복된 코드로 보고, 이를 방지 하기 위해서 사용합니다.

function main(value) {
  value();
};

main(() => {
     console.log("i am sub");
});
function main2(value) {
  console.log(value);
};
main2(1000);

function sub(value){
  console.log("i am sub");
};
main2(sub);

// 8, 13, 18,23

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
};

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
