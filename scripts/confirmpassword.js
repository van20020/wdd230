const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");
const message = document.querySelector("#formmessage");

confirmpassword.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (password.value !== confirmpassword.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		confirmpassword.style.backgroundColor = "#fff0f3";
		confirmpassword.value = "";
		confirmpassword.focus();
	} else {
		message.style.display = "none";
		confirmpassword.style.backgroundColor = "#fff";
		confirmpassword.style.color = "#000";
	}
}