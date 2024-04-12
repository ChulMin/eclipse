var number = prompt("숫자를 입력해주세요 : ",0);
	var result = null;
	if(number<0){
		result="는 음수 입니다.";
	}
	else if(number>0){
		result="는 양수 입니다.";
	}
	else{
		result="은 .....너 바보지...";
	}
	document.write("<h2>"+number+result);