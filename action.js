
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");
		if (document.getElementById('password') || document.getElementById('pass') || document.getElementById('Email') || document.getElementById('Passwd')) {
			var myUsername = 'empoweredtask1@gmail.com';
			var myPassword = 'Yhack2015';

			// JetBlue, Brown SSO, Yale CAS login
			if (document.getElementById('password')) {
				var siteUrl = window.location.href;
				var userField = document.getElementById('username');
				var passwordField = document.getElementById('password');

				setFields();

				if (siteUrl.indexOf("https://book.jetblue.com") > -1) {
					var scriptNode = document.createElement('script');
					scriptNode.textContent = "javascript:prepareSubmit();";
					document.body.appendChild(scriptNode);
				}
				else if (siteUrl.indexOf("https://secure.its.yale.edu/cas/login") > -1) {
					document.getElementById("login_form").submit();
				}
				else if (siteUrl.indexOf("https://sso.brown.edu/idp/Authn/MCB") > -1) {
					document.getElementById("login").submit();
				}
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
		
		return true;
	}
);
	



