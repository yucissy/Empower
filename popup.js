
window.onload = function() {
  Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");

  document.getElementById("login").onclick = function(event){
  event.preventDefault();
	var name = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	
	Parse.User.logIn(name, pass, {
	  success: function(user) {
      console.log("LOGIN User signed in: " + name);
		  window.location.href="show_permit.html";
	  },
	  error: function(user, error) {
      console.log("LOGIN User signing error: " + name);
      console.log("LOGIN Error: " + error.code + ' ' + error.message);
	    //window.location.href="signup.html";
	  }
  });
  };

  document.getElementById("signup").onclick = function(event){
    event.preventDefault();
    var name = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    
    var user = new Parse.User();
    user.set("username", name);
    user.set("password", pass);

    user.signUp(null, {
    success: function(user) {
      console.log("SIGNUP User signed up and logged in: " + name);
      window.location.href="show_permit.html";
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      console.log("SIGNUP Error: " + error.code + " " + error.message);
    }
    });
  };

}

