// you will see this log in console log of current tab in Chrome when the script is injected
console.log("content_script.js");

chrome.runtime.onMessage.addListener(function(cmd, sender, sendResponse) {
    console.log("chrome.runtime.onMessage: "+cmd);
    switch(cmd) {
    case "getHtml":
        // retrieve document HTML and send to popup.js
        sendResponse({title: document.title, url: window.location.href, html: document.documentElement.innerHTML});
        break;
    case "getHeadTitle":
        // retrieve title HTML and send to popup.js
        sendResponse(document.getElementsByTagName("title")[0].innerHTML);
        break;      
    default:
        sendResponse(null);
    }
});