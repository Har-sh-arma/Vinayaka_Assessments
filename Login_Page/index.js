
function some(){
	const em_el = document.getElementById("email");
	const psd_el = document.getElementById("psd");
	const user = {};
	user["email"] = em_el.value;
	user["psswd"] = psd_el.value;
	var xhr = new XMLHttpRequest();
	xhr.open("POST","http://localhost:3000", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(user));
	window.location.href = ("http://localhost:3000/Student")
}
