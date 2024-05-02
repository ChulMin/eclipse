// 동기와 비동기
// React.js에서 동기식과 비동기식은 구성 요소와 작업이 실행되는 방식을 나타냅니다.
// 동기식: 작업이 순차적으로 하나씩 실행됩니다.
//  작업은 동시에 실행될 수 있으며 프로그램은 계속 진행하기 전에 각 작업이 완료될 때까지 기다릴 필요가 없습니다.


// 1.동기 실행:
// 정의: 동기 실행은 작업이 순차적인 방식으로 하나씩 수행되는 것을 의미합니다. 
// 각 작업은 시작되기 전에 이전 작업이 완료될 때까지 기다려야 합니다.
// React에서의 사용법: React에서는 동기 작업이 간단합니다. 
// 함수를 호출하거나 작업을 동기식으로 수행하면 현재 코드가 완료될 때까지 다음 코드 줄이 실행되지 않습니다.

// 예: 일부 계산을 수행한 다음 React 구성 요소의 상태를 업데이트하는 함수를 생각해 보세요. 
// 동기 실행에서는 상태 업데이트가 계산이 완료된 직후에 발생하며, 모든 후속 코드는 상태 업데이트가 완료된 후에만 실행됩니다.

// 장점:
// 단순성: 동기 코드는 순차적으로 실행되기 때문에 읽고 이해하기가 더 쉽습니다.
// 예측 가능성: 동기 작업은 순서대로 실행되므로 프로그램 흐름을 추론하기가 더 쉽습니다.

// 단점:
// 차단: 동기 작업은 특히 I/O 작업(예: 서버에서 데이터 가져오기)과 같은 작업의 경우 실행 스레드를 차단할 수 있어 
// 사용자 경험이 느려질 수 있습니다.
// 확장성: 동기식 작업은 특히 트래픽이 많은 애플리케이션에서 시스템 리소스를 효율적으로 활용하지 못할 수 있으므로 확장성을 제한할 수 있습니다.


//2.비동기 실행:
// 정의: 비동기 실행은 작업이 순차적으로 수행되지 않음을 의미합니다. 
// 대신 일부 작업은 동시에 실행될 수 있으며, 프로그램은 다음 작업으로 이동하기 전에 각 작업이 완료될 때까지 
// 기다릴 필요가 없습니다.
// React에서의 사용법: API에서 데이터를 가져오거나 사용자 입력 이벤트를 처리하는 등의 작업을 처리할 때 비동기 작업이 일반적입니다. 
// React는 비동기 작업을 효과적으로 관리하기 위해 콜백, 약속, async/await와 같은 메커니즘을 제공합니다.
// 예: API에서 데이터를 가져오는 것은 비동기 작업입니다. 
// 프로그램은 요청을 시작하고 응답을 기다리지 않고 다른 작업을 계속합니다. 
// 응답이 수신되면 콜백 함수 또는 약속이 확인되어 프로그램이 데이터를 처리할 수 있습니다.

// 장점:
// 비차단: 비동기 작업을 통해 장기 실행 작업이 완료되기를 기다리는 동안 다른 작업을 계속할 수 있으므로 
// 애플리케이션의 응답성과 성능이 향상됩니다.
// 확장성: 비동기 작업은 애플리케이션이 더 많은 요청을 동시에 처리할 수 있도록 하여 확장성을 향상시킬 수 있습니다.

// 단점:
// 복잡성: 비동기 코드는 특히 콜백 지옥을 처리하거나 Promise 또는
// async/await를 사용하여 비동기 흐름을 관리할 때 더욱 복잡할 수 있습니다.
// 디버깅: 비동기 코드는 비선형 실행 흐름으로 인해 디버그하기가 더 어려울 수 있습니다.


// 올바른 접근 방식 선택:
// 1.작업의 특성: I/O 작업(예: 서버에서 데이터 가져오기, 파일 읽기/쓰기)과 관련된 작업의 경우 
// 일반적으로 메인 스레드 차단을 피하기 위해 비동기식 방법이 선호됩니다.
// 2.성능 고려 사항: 성능이 중요하고 작업에 I/O 작업이 포함되지 않은 경우 동기 메서드로 충분하고 구현하기가 더 쉬울 수 있습니다.
// 3.사용자 경험: 특히 사용자 입력 처리 또는 외부 소스에서 데이터 가져오기와 같은 작업의 경우 
// 응답성을 보장하기 위해 UI 애플리케이션에서 비동기식 메서드가 자주 사용됩니다.
// 4.코드 유지 관리성: 코드베이스의 복잡성과 유지 관리성을 고려하세요. 
// 비동기 코드는 더 복잡할 수 있지만 확장성과 성능상의 이유로 필요할 수 있습니다.

// 요약하면, 동기식 방법과 비동기식 방법 모두 프로그래밍에서 그 자리를 차지합니다. 
// 성능, 확장성, 코드 유지 관리성과 같은 요소를 고려하면서 애플리케이션의 요구 사항을 이해하고,
// 해당 요구 사항에 가장 적합한 접근 방식을 선택하는 것이 중요합니다.

//JavaScript에서는 외부 서버에서 데이터를 가져오거나 타이머가 만료되기를 기다리는 등의 비동기 작업이 브라우저 환경에서 제공되는 다양한 웹 API에 의해 처리됩니다. 이러한 웹 API에는 다음이 포함됩니다.

//1.XMLHttpRequest (XHR): HTTP 요청을 비동기적으로 만드는 데 사용되는 오래된 API입니다. 
//여전히 널리 사용되고 있지만 더 단순하고 현대적인 인터페이스로 인해 fetch()와 같은 최신 API가 이를 대체했습니다.

//2.Fetch API: 이 최신 API는 HTTP 요청을 비동기식으로 만드는 더욱 강력하고 유연한 방법을 제공합니다. 
//서버의 응답을 해결하는 Promise를 반환합니다.

//3.setTimeout() / setInterval(): 이 함수는 지정된 지연(setTimeout()의 경우) 이후 또는 정기적인 간격(setInterval(의 경우) 후 비동기적으로 함수를 실행하는 데 사용됩니다. )).

//4.DOM 이벤트: 브라우저의 이벤트 처리는 본질적으로 비동기식입니다.
// 이벤트가 발생하면(예: 클릭 또는 키 누르기) 관련 이벤트 핸들러 함수가 이벤트 루프에서 실행을 위해 대기열에 추가됩니다.

//5.WebSockets: WebSocket은 클라이언트와 서버 간의 양방향 통신 채널을 제공하여 실시간 데이터 전송을 가능하게 합니다. 비동기식으로 작동하므로 기본 스레드를 차단하지 않고도 데이터를 보내고 받을 수 있습니다.

//6.IndexedDB 및 웹 저장소(localStorage/sessionStorage): 이 API는 브라우저에 로컬로 데이터를 저장하는 데 사용됩니다. 이러한 스토리지 메커니즘에 대한 데이터 읽기 및 쓰기와 같은 작업은 일반적으로 비동기식입니다.

//7.JavaScript에서 이러한 비동기 작업 중 하나를 호출하면 브라우저 환경은 기본 JavaScript 실행 스레드 외부에서 작업의 실제 실행을 처리합니다. 대신 작업은 브라우저의 네트워킹 스택에 의해 관리되는 네트워크 요청이나 브라우저의 이벤트 루프에 의해 관리되는 타이머와 같은 브라우저의 내부 메커니즘으로 오프로드됩니다.

//비동기 작업이 완료되면(예: HTTP 요청이 응답을 받거나 타이머가 만료되면) 관련 콜백 함수 또는 Promise가 이벤트 큐에 배치됩니다. 이벤트 루프는 실행할 작업에 대한 이벤트 큐를 지속적으로 확인하여 완료된 비동기 작업에 대한 콜백 함수가 메인 스레드를 차단하지 않고 수신된 순서대로 실행되는지 확인합니다.

//전반적으로 이러한 웹 API는 브라우저 환경 내에서 JavaScript의 비동기 작업을 처리하는 데 필요한 인프라를 제공하여 개발자가 응답성이 뛰어나고 효율적인 웹 애플리케이션을 구축할 수 있도록 합니다.

function timeout(){
  let inter =setInterval(() => {
    let date = new Date();
    console.log(date.toLocaleString());
  }, 1000);
  setTimeout(() => {
    clearInterval(inter);
    console.log("김휘수 코드 STOP");
  }, 5000);
}
timeout();


function test() {
  let date1 = new Date();
  let year = date1.getFullYear();
  let month = date1.getMonth() + 1;
  let date = date1.getDate();
  let hour = date1.getHours();
  let minute = date1.getMinutes();
  let seconds = date1.getSeconds();

  console.log(year, month, date, hour, minute, seconds);
}

let inter = setInterval(test,1000);
setTimeout(() => {
  clearTimeout(inter);
  console.log("김형기 코드 STOP");
}, 10000);
//문제> 
// 1~100의 숫자를 덧셈하는 로직을 동기방식으로 코딩하세요.

function syncAdd() {
  let sum = 0;

  for(let i=1; i <=100; i++){
    sum+=i;
  }
  console.log("sync Sum = " + sum);// 5050
}

syncAdd();

// 1~200의 숫자를 덧셈하는 로직을 비동기방식으로 코딩하세요.
//Promise
function asyncAdd() {
  return new Promise((resolve, reject) => {
    let sum = 0;

  for(let i=1; i <=200; i++){
    sum+=i;
  }
  resolve(sum);
  });  
}
//async&await
async function ExecuteasyncAdd(){

  const sum = await asyncAdd();
  console.log("async Sum = " + sum);// 20100
}

ExecuteasyncAdd();

//동기
function one(){
  let sum = 0;
  let i = 1;
  while(true){
    sum += i;
    if(sum>=3000){
      console.log("동기 i = "+i);
      console.log("동기 sum = "+sum);
      break;
    }
    i++
  }
}
one();
i = 1;
//비동기
function Two(){
  return new Promise((resolve, reject) => {
    let sum = 0;
    
 while(true){
    sum+=i;
    if(sum>=3000){
      resolve(sum,i);
      break;
    }
    i++
  }
  });  
}
//async&await
async function Two2(){

  const sum = await Two();
  console.log("비동기 i = "+i);// 20100
  console.log("비동기 sum = "+sum);
  console.log("-============================================-");
}

Two2();

//문제3
//동기
function synchronousAdd(start,end){
  let sum = 0;
  for(i=start;i<=end;i++){
    sum+=i;
  }
  return sum;
}
//비동기
function asynchronousAdd(start,end){
  return new Promise((resolve,reject) =>{
      
       
    setTimeout(() => {
      
    
    let sum = 0;
    for(i=start;i<=end;i++){
      
      sum+=i;
  }
  resolve(sum);
  
}, 10000);// 10초동안실행대기

  });
  

  return sum;
}

async function asyncMain(){
 const start = 10;
 const end = 100;
const syncSum = synchronousAdd(start,end);
console.log("동기 Sum = " + syncSum);
const asyncSum = await asynchronousAdd(start,end);
console.log("비동기 Sum = " + syncSum);

}
asyncMain();



// console.log(1);

// setTimeout(() => {
  // console.log(2);
// }, 3000);

// console.log(3);