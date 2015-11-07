
window.onload = function() {
  Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");

  document.getElementById("login").onclick = function(event){
  event.preventDefault();
		console.log("here");
	var name = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	
	Parse.User.logIn(name, pass, {
	  success: function(user) {
      console.log("SIGNIN User signed in: " + name);
		  window.location.href="give_permit.html";
	  },
	  error: function(user, error) {
      console.log("SIGNIN User signing error: " + name);
      console.log("SIGNIN Error: " + error.code + ' ' + error.message);
	    //window.location.href="signup.html";
	  }
  });

};
	// document.getElementById("use_permit").onclick = function(event){
// 		window.location.href="use_permit.html";
// 	};
}

