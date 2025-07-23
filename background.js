chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'updateLocation') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'updateLocation' });
      }
    });
  }
});