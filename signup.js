
window.onload = function() {
  Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");

  document.getElementById("signup").onclick = function(event){
    event.preventDefault();

  	var name = document.getElementById("username").value;
  	var pass = document.getElementById("password").value;
  
  	
	var user = new Parse.User();
	//var Permissions = Parse.Object.extend("Permissions");
	//var permission = new Permissions();

	user.set("username", name);
	user.set("password", pass);
	// Simple syntax to create a new subclass of Parse.Object.
	var Permissions = Parse.Object.extend("Permissions");
	var permission = new Permissions();

	permission.set("user", name);
	permission.set("gmail_allow", "[pat, martha]");
	permission.save(null, {
		success: function(permission) {
		},
		error: function(permission, error) {

		}
	});

	user.signUp(null, {
	  success: function(user) {
      // Navigate to permissions page
      window.location.href="give_permit.html";
	  },
	  error: function(user, error) {
		  // Show the error message somewhere and let the user try again.
		  alert("Error: " + error.code + " " + error.message);
	  }
	});

};

  document.getElementById("login").onclick = function(event){
  event.preventDefault();
  

	var name = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	
	Parse.User.logIn(name, pass, {
	  success: function(user) {
		  window.location.href="give_permit.html";
		  chrome.browserAction.setPopup({
		  	popup: 'give_permit.html'
		  });
	  },
	  error: function(user, error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
  });

};
}


