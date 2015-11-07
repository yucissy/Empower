if (document.getElementById('password') || document.getElementById('pass') || document.getElementById('Email') || document.getElementById('Passwd')) {
	var myUsername = 'empowered_user';
	var myPassword = '123456';
    var userField;
    var passwordField;

    // JetBlue login
    if (document.getElementById('password')) {
        var userField = document.getElementById('username');
        var passwordField = document.getElementById('password');

        setFields();

        var scriptNode = document.createElement('script');
        scriptNode.textContent = "javascript:prepareSubmit();";

        document.body.appendChild(scriptNode);
    }
    // Facebook login
    else if (document.getElementById('pass')) {
        var userField = document.getElementById('email');
        var passwordField = document.getElementById('pass');

        setFields();

        document.getElementById("login_form").submit();
    }
    else if (document.getElementById('Email')) {
        userField = document.getElementById('Email');  
        userField.value = myUsername;    
        document.getElementById('gaia_loginform').submit();     

    }
    else if (document.getElementById('Passwd')) {
        passwordField = document.getElementById('Passwd');
        passwordField.value = myPassword;
        document.getElementById('gaia_loginform').submit();
    }
    function setFields() {
        passwordField.value = myPassword;
        userField.value = myUsername;
    }
}


