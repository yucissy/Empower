window.onload = function() {

  Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");

  // Check user login
  var currentUser = Parse.User.current();
  if (currentUser) {
    console.log('STANDIN User logged in: ' + currentUser.get("username"))

    // Look up permissions and populate HTML page
    var permissions = new Permissions();
    var query = new Parse.Query(permissions);
    query.equalTo("alias_name", currentUser.get("username"));
    query.find({
    success: function(results) {
      alert("Successfully retrieved " + results.length + " permissions.");
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        console.log(object.id + ' - ' + object.get('username') + '-' + object.get('gmail_allow'));
      }
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
    });

    // CAN I USE JQUERY FOR THIS?
    document.getElementById('user').innerHTML += 'This is the content';

  } else {
    console.log('STANDIN User NOT logged in')
    window.location.href="login.html";
  }

  document.getElementById("give_permission").onclick = function cancel() {
    window.location.href="give_permit.html";
  };
}