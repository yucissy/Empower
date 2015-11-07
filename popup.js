window.onload = function() {
document.getElementById("login").onclick = function login() {
chrome.browserAction.setPopup( {
	popup: 'give_permit.html'
});
};
}
