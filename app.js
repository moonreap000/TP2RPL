var DB_USER = [	
	{
		username: "",
		password: ""
	}
]

var inputUsername = document.querySelector("#username");
var inputPassword = document.querySelector("#password");
var inputKonfirmasi_password = document.querySelector("#konfirmasi_password");
var buttonSubmit = document.querySelector("#submitForm");
/*
console.log(inputUsername);
console.log(inputPassword);
console.log(buttonSubmit);*/
var warningmsg = document.getElementById("toggle_p");
warningmsg.style.display = "none";

var warningmsg_username = document.getElementById("toggle_username");
warningmsg_username.style.display = "none";

var warningmsg_password = document.getElementById("toggle_password");
warningmsg_password.style.display = "none";

buttonSubmit.addEventListener('click', (e)=>{
	e.preventDefault();
	var valueInputPassword = inputPassword.value;
	var valueInputUsername = inputUsername.value;
	var valueInputKonfirmasi_password = inputKonfirmasi_password.value;
		
	let flag=0;
	if (valueInputPassword === valueInputKonfirmasi_password) {
		flag = 1;
	}
	else{
		flag = 0;
	}

	let x ={}

	/*push*/
	if (valueInputUsername==="") {
		warningmsg_username.style.display = "block";
		if(valueInputPassword===""){
			warningmsg_password.style.display = "block";
		}
		else{
			warningmsg_password.style.display = "none";
		}
		console.log("Tidak masuk ke array")
	}

	else if(valueInputPassword==="" && valueInputUsername!=""){
		warningmsg_password.style.display = "block";
		warningmsg_username.style.display = "none";
	}
	else{
		warningmsg_username.style.display = "none";
		warningmsg_password.style.display = "none";
		if (flag === 0) {
			warningmsg.style.display = "block";
			console.log("Tidak masuk ke array")
		}
		else{
			warningmsg.style.display = "none";
			alert("Selamat anda masuk ke home");
			console.log("Masuk ke array")

			x ={
				username : valueInputUsername,
				password : valueInputPassword
				}
			
			DB_USER.push(x);
			
			console.log(DB_USER);
		}
	}
	
})
