function cook(create){
		var text = prompt("라면을 끓이는 순서를 입력하라","");
		if(text== null || text == "")
		return;
		var Cr = document.createElement("li");
		Cr.innerHTML = text;
		create.appendChild(Cr);
	}