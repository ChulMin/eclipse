function sale(obj){
		var p = document.getElementById("price").value;
		var dr = document.getElementById("discount_rate").value/100;
		var text = "상품의 원래 가격은 "+p+"원이고, 할인율은<br>"+(dr*100)+"%입니다.";
		text+=(p*dr)+"원을 절약한 "+(p-(p*dr))+"원에 살 수 있습니다.";
		var print = document.getElementById("print");
		print.innerHTML=text;
	}