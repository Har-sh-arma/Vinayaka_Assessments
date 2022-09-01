
function some(){
	const usr_el = document.getElementById("user");
	const psd_el = document.getElementById("psd");
	const user = {};
	user["name"] = usr_el.value;
	user["psswd"] = psd_el.value;
	var xhr = new XMLHttpRequest();
	xhr.open("POST","http://localhost:3000", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(user));
	window.location.href = ("http://localhost:3000/Student")
}
