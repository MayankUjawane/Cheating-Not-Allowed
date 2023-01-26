chrome.tabs.onUpdated.addListener((tabId, tab) => {
    console.log(tab.url);
    if (tab.url && tab.url.includes("assessment")) {
        console.log("mil gaya");
        chrome.tabs.sendMessage(tabId, {message: "Found"});
    }
  });