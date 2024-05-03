import "./Main.css";


//화살표 함수
const Main = () => {
    const user = { 
        name: "현대빈",
        isLogin:true,
    }
    if(user.isLogin){
        return <div className="logout">로그아웃</div>
    }
    else{
        return <div className="logout">로그인</div>
    }/*
    const number = 100;
const obj = {a:14500}//부모가 둘이상이면 안된다.
    return(
    <main>
     <h1>Main...</h1>
     <h2>{ number + 100 }</h2>
     <h2>{ number % 2 == 0? "even" : "odd"}</h2>
    { 100 }
    { number }
    {[10,20,30]}
    { true }
    { undefined }
    { null }
    {obj.a }
    <img></img>
     {/* {if(true){
        x = 100;
     }};

     {for(let x = 10; x <j= 100; x++){
        x+=z;
     }} }
    </main>
    )*/
  }
  export default Main;// 기본값으로 지정된 함수