document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('activate').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "activate_extension"});
    });
  });
});
console.log("Popup script loaded");
console.log("Popup script loaded");
