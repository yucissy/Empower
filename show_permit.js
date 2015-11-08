window.onload = function() {

  Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");
  // Check user login
  var currentUser = Parse.User.current();
  
  if (currentUser) {
    console.log('SHOW_PERMIT User logged in: ' + currentUser.get("username"))

    // Look up permissions and populate HTML page
    var Permissions = Parse.Object.extend("Permissions");
    var received = new Permissions();
    var received_query = new Parse.Query(received);
        
    
    
    //for the permission object received with alias attribute equaling current user
    received_query.equalTo("alias", currentUser.get("username"));

    received_query.find({
    success: function(results) {
      console.log("SHOW_PERMIT Successfully retrieved " + results.length + " received permissions.");
      // Do something with the returned Parse.Object values
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


      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: "login"}, function(response) {
      alert("responded");
    });  
});
    };
		document.getElementById('received_permit').appendChild(button);
		
        console.log(object.id + ' Username: ' + object.get('user') + ' Alias: ' + object.get('alias'));
        
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
      console.log("SHOW_PERMIT Received Permit Error: " + error.code + " " + error.message);
    }
    });

    var sent = new Permissions();
    var sent_query = new Parse.Query(sent);
    sent_query.equalTo("user", currentUser.get("username"));

    sent_query.find({
    success: function(results) {
      console.log("SHOW_PERMIT Successfully retrieved " + results.length + " sent permissions.");
      // Do something with the returned Parse.Object values
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        
        
        y = ('User: ' + object.get('user') + 
          ' Alias: ' + object.get('alias') + ' Account: ' + object.get('account') + ' Time: ' + object.get('time'));
        
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
  }

  document.getElementById("give").onclick = function cancel() {
    window.location.href="give_permit.html";
  };

  document.getElementById("use").onclick = function cancel() {
    window.location.href="use_permit.html";
  };

  document.getElementById("logout").onclick = function submit() {
    Parse.User.logOut();
    window.location.href="login.html";
  };

  function autoSignIn(id) {
    alert(id);
  };

}