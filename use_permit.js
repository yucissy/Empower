window.onload = function() {
	  document.getElementById("Cliff_gmail").onclick = function(event){
	  	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {action: "login"}, function(response) {
    });  
});
	 };
	}