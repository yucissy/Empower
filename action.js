if (document.getElementById('password')) {
	var myUsername = 'empowered_user';
	var myPassword = '123456';

	var userField = document.getElementById('username');
	var passwordField = document.getElementById('password');

	passwordField.value = myPassword;
	userField.value = myUsername;

	var scriptNode = document.createElement('script');
	scriptNode.textContent = "javascript:prepareSubmit();";

	document.body.appendChild(scriptNode);
}

