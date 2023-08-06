// Function to send a message to content.js and get the word count from the page.
function getWordCount() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getWordCount" }, function (response) {
            if (response && response.wordCount) {
                document.getElementById("jupyter-to-epub").textContent = response.wordCount;
            } else {
                document.getElementById("jupyter-to-epub").textContent = "Error: Unable to get word count.";
            }
        });
    });
}

// Call getWordCount when the popup is loaded.
document.addEventListener("DOMContentLoaded", function () {
    getWordCount();
});
