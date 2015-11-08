window.onload = function() {

  Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");
  // Check user login
  var currentUser = Parse.User.current();
  
  if (currentUser) {
    console.log('SHOW_PERMIT User logged in: ' + currentUser.get("username"))

    // ##### RECEIVED PERMISSIONS #####

    // Look up permissions and populate HTML page
    var Permissions = Parse.Object.extend("Permissions");
    var received = new Permissions();
    var received_query = new Parse.Query(received);
    
    // For the permission object received with alias attribute equaling current user
    received_query.equalTo("alias", currentUser.get("username"));

    received_query.find({
    success: function(results) {
      console.log("SHOW_PERMIT Successfully retrieved " + results.length + " received permissions.");

      // Iterate through each returned object and create buttons
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        var x = (' Account: ' + object.get('account') + ' User: ' + object.get('user') + 
        ' Time: ' + object.get('time'));
       
    		var button = document.createElement("button");
    		var t = document.createTextNode(x);
    		button.appendChild(t);
        button.id = object.id;
        button.class = "button";

        button.onclick = function() {
          var account;
          var Permissions = Parse.Object.extend("Permissions");
          var query = new Parse.Query(Permissions);
          query.get(this.id, {
            success: function(permission) {
              account = permission.get("account");
              username = permission.get("account_username");
              password = permission.get("account_password");
              chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {username, password, account}, function(response) {});  
              });
            },
            error: function(object, error) {
              alert("Error");
            }
          });
        };

		    document.getElementById('received_permit').appendChild(button);
        console.log(object.id + ' Username: ' + object.get('user') + ' Alias: ' + object.get('alias'));
      }
    },
    error: function(error) {
      console.log("SHOW_PERMIT Received Permit Error: " + error.code + " " + error.message);
    }
    });

    // ##### SENT PERMISSIONS ##### // 

    var sent = new Permissions();
    var sent_query = new Parse.Query(sent);
    sent_query.equalTo("user", currentUser.get("username"));

    sent_query.find({
      success: function(results) {
        console.log("SHOW_PERMIT Successfully retrieved " + results.length + " sent permissions.");
        // Do something with the returned Parse.Object values
        for (var i = 0; i < results.length; i++) {
          var object = results[i];
          y = ('User: ' + object.get('user') + ' Alias: ' + object.get('alias') + 
            ' Account: ' + object.get('account') + ' Time: ' + object.get('time'));
        
          var button = document.createElement("button");
    		  var t = document.createTextNode(y);
    		  button.appendChild(t);
          button.id = object.id;

    		  document.getElementById('sent_permit').appendChild(button);
          console.log(object.id + ' Username: ' + object.get('user') + ' Alias: ' + object.get('alias'));
        }
      },
      error: function(error) {
        console.log("SHOW_PERMIT Sent Permit Error: " + error.code + " " + error.message);
      }
    });

  } else {
    console.log('SHOW_PERMIT User NOT logged in')
    window.location.href="login.html";
  };

  document.getElementById("give").onclick = function cancel() {
    window.location.href="give_permit.html";
  };

  document.getElementById("logout").onclick = function submit() {
    Parse.User.logOut();
    window.location.href="login.html";
  };

  function autoSignIn(id) {
    alert(id);
  };

}