function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
    
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result+1);
    return add10(result+2);
  })
  .then((result) => {
    console.log(result+3);
    return add10(undefined);
  })
  .then((result) => {
    // 두번째 then에서 return add10(undefined); 
    //=> add10에 undefined를 넣어서 10번 라인의 reject("num이 숫자가 아닙니다.");가 전달되어 27~33번 안으로 들어가지 않고
    //34번 라인 .catch((error))안으로 들어가서 실행합니다.
    console.log(result+"입니다.");
    return add10(0);
  })
  .catch((error) => {
    alert("실패");
    console.log(error+"~~~~~~~");
  });

  add10(100)
  .then((result) => {
    console.log(result);

  })
  const p  = add10(1500);
    p.then((result) =>{
      console.log(result);
    })
    const p2  = add10(2500);
    p2.then((result) =>{
      console.log(result);
    })
    