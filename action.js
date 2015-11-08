
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		
		if (document.getElementById('password') || document.getElementById('pass') || 
			document.getElementById('Email') || document.getElementById('Passwd') || document.getElementById('signin-password')) {
			var myUsername = request.username;
			var myPassword = request.password;
			var myAccountType = request.account;

			// JetBlue, Brown SSO, Yale CAS login
			if (document.getElementById('password') && (myAccountType == "4" || myAccountType == "3" || myAccountType == "2")) {
				var siteUrl = window.location.href;
				var userField = document.getElementById('username');
				var passwordField = document.getElementById('password');

				setFields();

				if (siteUrl.indexOf("https://book.jetblue.com") > -1 && myAccountType == "4") {
					var scriptNode = document.createElement('script');
					scriptNode.textContent = "javascript:prepareSubmit();";
					document.body.appendChild(scriptNode);
				}
				else if (siteUrl.indexOf("https://secure.its.yale.edu/cas/login") > -1 && myAccountType == "2") {
					document.getElementById("login_form").submit();
				}
				else if (siteUrl.indexOf("https://sso.brown.edu/idp/Authn/MCB") > -1 && myAccountType =="3") {
					document.getElementById("login").submit();
				}
			}
			// Facebook login
			else if (document.getElementById('pass') && myAccountType == "1") {
				var userField = document.getElementById('email');
				var passwordField = document.getElementById('pass');

				setFields();

				document.getElementById("login_form").submit();
			}
			// Gmail username
			else if (document.getElementById('Email') && myAccountType == "0") {
				userField = document.getElementById('Email');  
				userField.value = myUsername;    
				document.getElementById('gaia_loginform').submit();     

			}
			// Gmail password
			else if (document.getElementById('Passwd') && myAccountType == "0") {
				passwordField = document.getElementById('Passwd');
				passwordField.value = myPassword;
				document.getElementById('gaia_loginform').submit();
			}
			// Twitter
			else if (document.getElementById('signin-password') && myAccountType == "5") {
				alert('Here!');
				var userField = document.getElementById('signin-email');
				var passwordField = document.getElementById('signin-password');

				setFields();

				document.getElementsByClassName('LoginForm')[0].submit();
			}

			// General function for setting password and user fields
			function setFields() {
				passwordField.value = myPassword;
				userField.value = myUsername;
			}
		}
		
		//return true;
	}
);
	



