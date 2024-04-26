// 함수
let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

greeting();
function greeting(){
  console.log("HELLO~~");
}
function getRectangelarea(){
  let width = 20;
  let height = 30;
  let area = width * height;

  console.log(area);//600
}
getRectangelarea();

// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}
