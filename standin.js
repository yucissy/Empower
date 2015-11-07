window.onload = function() {

  Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");

  // Check user login
  var currentUser = Parse.User.current();
  if (currentUser) {
    alert('User logged in: ' + currentUser.get("username"))

    // Look up permissions and populate HTML page

  } else {
    alert('User NOT logged in')
    window.location.href="login.html";
  }

  document.getElementById("give_permission").onclick = function cancel() {
    window.location.href="give_permit.html";
  };
}