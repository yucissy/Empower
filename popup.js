
window.onload = function() {
  Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");

  document.getElementById("login").onclick = function(event){
    event.preventDefault();

  var name = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

	var user = new Parse.User();
	user.set("username", name);
	user.set("password", pass);
	//user.set("email", "test@gmail.com");
	//user.set("phone", "415-392-0202");

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
}

