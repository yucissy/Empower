
window.onload = function() {
  Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");

  document.getElementById("login").onclick = function(event){
  event.preventDefault();

	var name = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	
	Parse.User.logIn(name, pass, {
	  success: function(user) {
		  window.location.href="standin.html";
	  },
	  error: function(user, error) {
	    alert("failed");
	  }
  });

};

}

