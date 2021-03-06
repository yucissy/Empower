window.onload = function() {
	// Check if user is logged in
	Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");
	var currentUser = Parse.User.current();
	if (currentUser) {
		// Send status message
		console.log('GIVE_PERMIT User logged in: ' + currentUser.get("username"));
	} else {
		// Navigate back to login page
		console.log('GIVE_PERMIT No user logged in' + currentUser.get("username"));
		window.location.href="login.html";
	}

	document.getElementById("cancel").onclick = function cancel() {
		window.location.href="show_permit.html";
	};

	document.getElementById("submit").onclick = function submit() {
		var alias = document.getElementById("alias").value;
	  var account = document.getElementById("account").value;
	  var account_username = document.getElementById("account_username").value;
	  var account_password = document.getElementById("account_password").value;		  
	  var hours = document.getElementById('hours').value;

		// Create a new instance Permission.
		var Permissions = Parse.Object.extend("Permissions");
		var permissions = new Permissions();
		permissions.set("user", currentUser.get('username'));
		permissions.set("account", account);
		permissions.set("account_username", account_username);
		permissions.set("account_password", account_password);
		permissions.set("alias", alias);
		permissions.set("time", hours);
		
		permissions.save(null, {
		success: function(permissions) {
			console.log('GIVE_PERMIT Permission save successful');
			window.location.href="show_permit.html";
		},
		error: function(permissions, error) {
			console.log('GIVE_PERMIT Permission save FAILED. Error: ' + error.code + " " + error.message);
		}
		});
	};
}