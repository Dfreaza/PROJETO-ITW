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
		starter,
		login_type,
		result
	} = event.target;

	const processUser = login_type.value == "register" ? registerUser : loginUser;
	const response    = processUser(username.value, password.value,starter.value);
	result.innerHTML  = response;
}
// registar user.................................................................
function registerUser(username, password, starter){
	window.localStorage.setItem("Login__username", username);
	window.localStorage.setItem("Login__password", password);
	window.localStorage.setItem("Starter__pokemon", starter);
	return `New user ${username} now registered! Your Pokémon is ${starter}!`;
}
// login......................................................................
function loginUser(username, password, starter){
	const registeredUser     = window.localStorage.getItem("Login__username");
	const registeredPassword = window.localStorage.getItem("Login__password");
	const registeredStarter = window.localStorage.getItem("Starter__pokemon");

	const validUser     = username == registeredUser;
	const validPassword = password == registeredPassword;
	const validStarter = starter == registeredStarter;

	if(validUser && validPassword && validStarter){
		return `User ${username} successfully logged-in with is friend ${starter}!`;
	}
        else if(!validUser)     return `Username ${username} has not been registered. `;
	else if(!validPassword) return `Incorrect password for username ${username}`;
	else if (!validStarter) return `Incorrect starter pokémon for the username ${username}`;
}