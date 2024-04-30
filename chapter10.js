// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
let date2 = new Date(1997, 1, 7, 23, 59, 59);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
let date4 = new Date(ts1);
console.log("현재시각 = "+date1);
//date1 <==> date4
//console.log("현재시각 = "+date1) <= ts1에 date1.getTime로 값 대입후 date4에 Date형식으로 대입 =>console.log("현재시각 = "+date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
console.log("현재 년도 = "+year+" 년도");
let month = date1.getMonth() + 1;
console.log("현재   월 = "+month+" 월");
let date = date1.getDate();
console.log("현재   일 = "+date+" 일");
let hour = date1.getHours();
console.log("현재 시간 = "+hour+" 시간");
let minute = date1.getMinutes();
console.log("현재   분 = "+minute+" 분");
let seconds = date1.getSeconds();
console.log("현재   초 = "+seconds+" 초");

// 4. 시간 수정하기
date1.setFullYear(2023);
console.log("년도 변경시각 = "+date1);
date1.setMonth(2);
console.log("월   변경시각 = "+date1);
date1.setDate(30);
console.log("일   변경시각 = "+date1);
date1.setHours(23);
console.log("시간 변경시각 = "+date1);
date1.setMinutes(59);
console.log("분   변경시각 = "+date1);
date1.setSeconds(59);
console.log("초   변경시각 = "+date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());
