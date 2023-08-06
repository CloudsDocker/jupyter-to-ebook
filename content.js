// Function to count the words in a given text.
function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.length;
}

// Listener to receive messages from the popup and respond with the word count.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getWordCount") {
        const pageText = document.body.innerText;
        const wordCount = countWords(pageText);
        sendResponse({ wordCount: wordCount });
    }
});
