
function timeout(){
  let sec = 1;
  let inter =setInterval(() => {
    console.log(sec.toLocaleString()+"초");
    sec++;
  }, 1000);
  setTimeout(() => {
    clearInterval(inter);
    console.log("STOP");
  }, 10000);
}
timeout();

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 3000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1000);
}
//stairs(계단식 단계별로 일정시간이 지나면 출력)

orderFood((food) => {
  console.log("뜨거운"+food);//3초
  setTimeout(()=>{console.log(food);},2000);//5초

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);//

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});

function task(){
  setTimeout(()=> {
    console.log("반값습니다.");
  
  },4000)
}
task();
function add(n1,n2,collback){
  
    setTimeout(() => {
    const sum = n1+n2;
   // console.log("add("+n1+" + "+n2+") = "+sum);

   collback("add("+n1+" + "+n2+") = "+sum);
  }, 10000);
  
}
//add(100,500,sum);
add(100,500,(value)=>{console.log(value);})

function tteokbokki(callback){
  setTimeout(() =>{
    const food = "떡볶이";
    callback(food);
  
  })
  
}
function cooltteokbokki(food,callback){
  setTimeout(() =>{
    const cool = `식은 ${food}`;
    callback(food);
  
  })

}
