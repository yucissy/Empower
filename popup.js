
window.onload = function() {
	Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");

document.getElementById("login").onclick = function(event){
    	event.preventDefault();
    	var name = document.getElementById("username").value;
    	var pass = document.getElementById("password", pass);
    	window.location.href="give_permit.html";
    };
    

}

