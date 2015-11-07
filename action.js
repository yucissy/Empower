if (document.getElementById('password') || document.getElementById('pass')) {
	var myUsername = 'empowered_user';
	var myPassword = '123456';
    var userField;
    var passwordField;

    // JetBlue login
    if (document.getElementById('password')) {
        var userField = document.getElementById('username');
        var passwordField = document.getElementById('password');

        passwordField.value = myPassword;
        userField.value = myUsername;

        var scriptNode = document.createElement('script');
        scriptNode.textContent = "javascript:prepareSubmit();";

        document.body.appendChild(scriptNode);
    }
    // Facebook login
    else if (document.getElementById('pass')) {
        var userField = document.getElementById('email');
        var passwordField = document.getElementById('pass');

        passwordField.value = myPassword;
        userField.value = myUsername;
    }
}

