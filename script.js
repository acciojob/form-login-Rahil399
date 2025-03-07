function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	let firstName = document.querySelector("input[name='fname']").value.trim();
	let lastName = document.querySelector("input[name='lname']").value.trim();

	if(firstName || lastName){
	alert(`${firstName} ${lastName}`);
	}else{
		alert("Please enter your name.");
	}	

	document.getElementById("form1").addEventListner("sumbit", getFormvalue);
}
