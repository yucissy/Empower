window.onload = function() {
Parse.initialize("TR0PpcB3RW3yejpUHTywnCtWHZ0M44wJTMH8mHMe", "7DBkXfxGDhsFsw29EACSBLlXlNnWomduRWj3YOoQ");

document.getElementById("cancel").onclick = function cancel() {
window.close();
};
document.getElementById("submit").onclick = function submit() {
window.close();
};
document.getElementById("signout").onclick = function signout() {
	Parse.User.logOut();
	chrome.browserAction.setPopup({
		  	popup: 'login.html'
	});
	window.close();
}
}