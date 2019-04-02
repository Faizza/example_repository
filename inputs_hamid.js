
but_add.addEventListener("click",open)

function open(){

	var obj1 = {};

	var inp2 = document.getElementsByTagName("input");
	var n ='';
	for(var i=0; i<inp2.length; i++){
		obj1["name"+i]=inp2[i].value;
		n+= obj1["name"+i] + " ";
	}
	 console.log(n);
}

