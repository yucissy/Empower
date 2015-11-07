window.onload = function() {

  Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");

  // Check user login
  var currentUser = Parse.User.current();
  if (currentUser) {
    console.log('STANDIN User logged in: ' + currentUser.get("username"))

    // Look up permissions and populate HTML page
    var Permissions = Parse.Object.extend("Permissions");
    var permissions = new Permissions();

    var query = new Parse.Query(permissions);
    query.equalTo("alias", currentUser.get("username"));

    query.find({
    success: function(results) {
      console.log("STANDIN Successfully retrieved " + results.length + " permissions.");
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        document.getElementById('permissions').innerHTML += ('User: ' + object.get('user') + 
          ' Alias: ' + object.get('alias') + ' Account: ' + object.get('account') + ' Time: ' + object.get('time') + '<br>');
        console.log(object.id + ' Username: ' + object.get('user') + ' Alias: ' + object.get('alias'));
      }
    },
    error: function(error) {
      console.log("STANDIN Error: " + error.code + " " + error.message);
    }
    });

  } else {
    console.log('STANDIN User NOT logged in')
    window.location.href="login.html";
  }

  document.getElementById("give_permission").onclick = function cancel() {
    window.location.href="give_permit.html";
  };
}