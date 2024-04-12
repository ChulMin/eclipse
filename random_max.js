var n = [];
	document.write("[");
	for(var i=0;i<10;i++){
		x= Math.floor(Math.random()*1000+1);
		n[i]=x;
		document.write(n[i]);
		if(i<9)document.write(", ");
	}
	document.write("]<hr>");
	var bigdata = n[0];
	for(var i=1;i<10;i++){
		if(bigdata<n[i]){
		bigdata=n[i];
		}
		}
		
	document.write("제일 큰 수 : "+bigdata+"<hr>");
	n= n.sort();
	document.write("오름차순["+n+"]<br><br>");
	n=n.reverse();
	document.write("내림차순["+n+"]");