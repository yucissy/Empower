window.onload = function() {

  Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");

  // Check user login
  var currentUser = Parse.User.current();
  if (currentUser) {
    console.log('STANDIN User logged in: ' + currentUser.get("username"))

    // Look up permissions and populate HTML page
    var Permissions = Parse.Object.extend("Permissions");

    var received = new Permissions();
    var received_query = new Parse.Query(received);
    received_query.equalTo("alias", currentUser.get("username"));

    received_query.find({
    success: function(results) {
      console.log("STANDIN Successfully retrieved " + results.length + " permissions.");
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        document.getElementById('received_permit').innerHTML += ('User: ' + object.get('user') + 
          ' Alias: ' + object.get('alias') + ' Account: ' + object.get('account') + ' Time: ' + object.get('time') + '<br>');
        console.log(object.id + ' Username: ' + object.get('user') + ' Alias: ' + object.get('alias'));
        
        var button = document.createElement("button");
        var t = document.createTextNode("Go!");
        button.appendChild(t);
        document.getElementById('received_permit').appendChild(button);
        // document.getElementById('received_permit').innerHTML += ("<button id="+object.id+">Go!</button>");
        // document.getElementById(object.id).style.color="red";
        // document.getElementById(object.id).onclick = function(event) {
        //   console.log("hey");
        // };
        //goSignIn(object, object.get('account'));

     //   document.getElementById(object.id).onclick = function(event){
     //   console.log("hey");
     //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
     //       chrome.tabs.sendMessage(tabs[0].id, {action: "login", type: account }, function(response) {
     //     });  
     //   });
   
     // };
      }
    },
    error: function(error) {
      console.log("STANDIN Received Permit Error: " + error.code + " " + error.message);
    }
    });

    var sent = new Permissions();
    var sent_query = new Parse.Query(sent);
    sent_query.equalTo("user", currentUser.get("username"));

    sent_query.find({
    success: function(results) {
      console.log("STANDIN Successfully retrieved " + results.length + " permissions.");
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        document.getElementById('sent_permit').innerHTML += ('User: ' + object.get('user') + 
          ' Alias: ' + object.get('alias') + ' Account: ' + object.get('account') + ' Time: ' + object.get('time') + '<br>');
        console.log(object.id + ' Username: ' + object.get('user') + ' Alias: ' + object.get('alias'));
      }
    },
    error: function(error) {
      console.log("STANDIN Sent Permit Error: " + error.code + " " + error.message);
    }
    });

  } else {
    console.log('STANDIN User NOT logged in')
    window.location.href="login.html";
  }

  document.getElementById("give").onclick = function cancel() {
    window.location.href="give_permit.html";
  };

  document.getElementById("use").onclick = function cancel() {
    window.location.href="use_permit.html";
  };

  document.getElementById("signout").onclick = function submit() {
    Parse.User.logOut();
    window.location.href="login.html";
    window.close();
  };


  function goSignIn(object, account) {
    console.log("account: " + account + " username: " + object.get('account_username') + "password: " + object.get('account_password'));
    document.getElementById(account).onclick = function(event){
      console.log("hey");
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
          chrome.tabs.sendMessage(tabs[0].id, {action: "login", type: account }, function(response) {
        });  
      });
   
    };
  };
}