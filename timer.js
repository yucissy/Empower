var refreshDisplayTimeout;
var bgpage = chrome.extension.getBackgroundPage();
var previousValues = [3, 5, 10, 30];
var editing = false;
window.onload = function() {
document.getElementById("cancel").onclick = function(event){

              chrome.browserAction.setPopup({
                  popup: 'login.html'
              });
              window.close();
              bgpage.turnOff();
	 };
document.getElementById("back").onclick = function(event){

            window.location.href="show_permit.html";
	 };
	}

document.addEventListener('DOMContentLoaded', function () {
    load();

    document.querySelector('#cancel').addEventListener('click', reset);
    document.querySelector('#wrench').addEventListener('click', swap);
    document.querySelector('#pause').addEventListener('click', pauseTimer);
    document.querySelector('#resume').addEventListener('click', resumeTimer);
    document.querySelector('#restart').addEventListener('click', restartTimer);
});

function show(section)
{
    document.getElementById(section).style.display = "block";
}

function showInline(section)
{
    document.getElementById(section).style.display = "inline";
}

function hide(section)
{
    document.getElementById(section).style.display = "none";
}

function load()
{


		show("display");
      refreshDisplay();
		show("modify");
		chrome.tabs.update(tabs[0].id, {url:"www.google.com"});
}





// Returns true if 0 <= amt <= 240
function isValid(amt)
{
	if(isNaN(amt) || (amt == null))
		return false;
	else if((amt < 0) || (amt > 240))
		return false;
	else
		return true;
}

function refreshDisplay()
{
   percent = bgpage.getTimeLeftPercent();
   
   if(percent < 15)
      document.getElementById("bar").style.color = "grey";
	document.getElementById("bar").textContent = bgpage.getTimeLeftString();
   document.getElementById("bar").style.width = percent + "%";
    
	refreshDisplayTimeout = setTimeout(refreshDisplay, 100);
}

function pauseTimer()
{
    hide("pause");
    showInline("resume");
    bgpage.pause();
    clearTimeout(refreshDisplayTimeout);
}

function resumeTimer()
{
    hide("resume");
    showInline("pause");
    refreshDisplay();
    bgpage.resume();
}

function restartTimer()
{
    hide("resume");
    showInline("pause");
    refreshDisplay();
    bgpage.restart();
}
function reset()
{
	alert("called");
	chrome.browserAction.setPopup({
		  	popup: 'login.html'
		  });
	clearTimeout(refreshDisplayTimeout);
	bgpage.turnOff();
	hide("display");
	show("settings");
	hide("modify");
}