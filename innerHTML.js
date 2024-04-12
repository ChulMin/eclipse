	function question(obj){
		var input = prompt("HTML 텍스트 혹은 그냥 텍스트를 입력하세요","바다");
		if(input == null || input =="")
		return;
		obj.innerHTML = input;
	}
