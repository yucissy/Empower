
window.onload = function() {

  document.getElementById("login").onclick = function(event){

  Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");
//     	event.preventDefault();
//     	var name = document.getElementById("username").value;
//     	var pass = document.getElementById("password", pass);
//     };
  event.preventDefault();
  var name = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  alert(name);
  alert(pass);

	var user = new Parse.User();
	user.set("username", name);
	user.set("password", pass);
	//user.set("email", "test@gmail.com");

	// other fields can be set just like with Parse.Object
	//user.set("phone", "415-392-0202");

	user.signUp(null, {
	  success: function(user) {
		// Hooray! Let them use the app now.
	  },
	  error: function(user, error) {
		  // Show the error message somewhere and let the user try again.
		  alert("Error: " + error.code + " " + error.message);
	  }
	});

  window.location.href="give_permit.html";
    
};
}

