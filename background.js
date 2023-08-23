chrome.contextMenus.create({
  id: "Reversing",
  title: "Reversing",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "Reversing") {
    const selectedText = info.selectionText;
    x = []
        for (const char in selectedText){
            x.push(char.charCodeAt());   
         }
    const sum = (arr) =>{
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += (arr[i]**arr[i]);
        }
        return (total * (arr.length * arr.length)) % 595;
    };
    const result = sum(x);
    chrome.tabs.create({ url: `https://${result}.com` });
  }
});
