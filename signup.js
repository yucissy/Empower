


window.onload = function() {
  Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");

  document.getElementById("login").onclick = function(event){
  event.preventDefault();
	var name = document.getElementById("username").value;
  	var pass = document.getElementById("password").value;
  
  	
	var user = new Parse.User();

	user.set("username", name);
	user.set("password", pass);
	user.set("masters", []);

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
	
	Parse.User.logIn(name, pass, {
	  success: function(user) {
      console.log("SIGNIN User signed in: " + name);
		  window.location.href="give_permit.html";
		  chrome.browserAction.setPopup({
		  	popup: 'give_permit.html'
		  });
	  },
	  error: function(user, error) {
      console.log("SIGNIN User signing error: " + name);
      console.log("SIGNIN Error: " + error.code + ' ' + error.message);
	    //window.location.href="signup.html";
	  }
  });

};
}




