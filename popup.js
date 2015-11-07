
window.onload = function() {
document.getElementById("cancel").onclick = function cancel() {

window.close();
};
}

 
    Parse.initizlize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");
    document.getElementById("login").onclick(function(event){
      alert("clicked");
    	event.preventDefault();
    	var name = $("username").val();
    	var pass = $("password", pass);
    	user.signUp(null, {
    		success: function(user){
    			//
    		}, error: function(user, error){
    			console.log("signup error:"+error.message);
    		}
    	});
    });
    
   //  var TestObject = Parse.Object.extend("TestObject");
//     var testObject = new TestObject();
    var User = Parse.Object.extend("TestObject");
    var User = new TestObject();
      testObject.save({foo: "cliff"}, {
      success: function(object) {
        $(".success").show();
      },
      error: function(model, error) {
        $(".error").show();
      }
    });
