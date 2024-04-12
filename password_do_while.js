var password;
	do{
		password = prompt("패스워드를 입력하세요",1234);
		if(password==1234){
			document.write("통과");
			break;
		}
	}while(true);