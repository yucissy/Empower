window.onload = function() {
<<<<<<< HEAD
	
	
=======
Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");

>>>>>>> 3a23f2475dbe780f5bbe50f4b40e74cd38a7f0b2
document.getElementById("cancel").onclick = function cancel() {
window.close();
};
document.getElementById("submit").onclick = function submit() {
<<<<<<< HEAD
	 Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");
	 var currentUser = Parse.User.current();
	if (currentUser.name) {
		// do stuff with the user
		alert(currentUser);
	} else {
		// show the signup or login page
	}
 
  var standinname = document.getElementById("standinname").value;
  var gmail = document.getElementById("gmail").value;
  var gmailpass = document.getElementById("gmailpass").value;
  var fb = document.getElementById("fb").value;
  var fbpass = document.getElementById("fbpass").value;
  var jb = document.getElementById("jb").value;
  var jbpass = document.getElementById("jbpass").value;
  
  
	// Create a new instance of that class.
	alert(currentUser+"2");
	var permissions = new Permissions();
	permissions.set("user", currentUser);
	permissions.set("gmail_user", "");
	permissions.set("gmail_pass", "");
	permissions.set("gmail_standins", [standinname, "tom"]);
	
	permissions.set("fb_user", fb);
	permissions.set("fb_pass", fbpass);
	permissions.set("jb_user", jb);
	permissions.set("jb_pass", jbpass);
	
	permissions.save(null, {
	success: function(permissions) {

	},
	error: function(permissions, error) {

	}

};
=======
window.close();
};
document.getElementById("signout").onclick = function signout() {
	Parse.User.logOut();
	chrome.browserAction.setPopup({
		  	popup: 'login.html'
	});
	window.close();
}
>>>>>>> 3a23f2475dbe780f5bbe50f4b40e74cd38a7f0b2
}