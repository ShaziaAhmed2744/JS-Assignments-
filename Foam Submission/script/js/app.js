function Submit(){
	var Name=document.getElementById('Name').value;
	var Contect=document.getElementById('Contect').value;
	var Email=document.getElementById('Email').value;
	var Checkbox=document.getElementById('checkbox').value;


	window.localStorage.setItem("Name", "Name")
	window.localStorage.setItem("Contect", "Contect")	
	window.localStorage.setItem("Email", "Email")	
	window.localStorage.setItem("checkbox", "checkbox")
}












