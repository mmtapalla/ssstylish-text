chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "SSStylishText",
        title: "Stylize Text",
        contexts: ["selection"],
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "SSStylishText") {
        chrome.tabs.sendMessage(tab.id, { action: "openPopup" });
    }
});
