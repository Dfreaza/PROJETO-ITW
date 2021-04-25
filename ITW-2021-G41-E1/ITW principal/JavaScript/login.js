window.addEventListener("DOMContentLoaded", setupForm);

function setupForm(){
	const form = document.getElementById("login-form");
	form.addEventListener("submit", handleSubmit);
}
// submit......................................................................
function handleSubmit(event){
	event.preventDefault();

	const {
		username,
		password,
		login_type,
		result
	} = event.target;

	const processUser = login_type.value == "register" ? registerUser : loginUser;
	const response    = processUser(username.value, password.value);
	result.innerHTML  = response;
}
// registar user.................................................................
function registerUser(username, password){
	window.localStorage.setItem("Login__username", username);
	window.localStorage.setItem("Login__password", password);

	return `New user ${username} now registered!`;
}
// login......................................................................
function loginUser(username, password){
	const registeredUser     = window.localStorage.getItem("Login__username");
	const registeredPassword = window.localStorage.getItem("Login__password");

	const validUser     = username == registeredUser;
	const validPassword = password == registeredPassword;

	if(validUser && validPassword){
		return `User ${username} successfully logged-in!`;
	}
        else if(!validUser)     return `Username ${username} has not been registered. `;
	else if(!validPassword) return `Incorrect password for username ${username}`;
}