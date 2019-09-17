function genericOnClick(info, tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    chrome.storage.sync.set({0: info["selectionText"]}, function() {
      console.log('Value is set to ' + info["selectionText"]);
    });
    chrome.storage.sync.get(['0'], function(result) {
      console.log('Value currently is ' + result[0]);
    });
  }
  
  // Create one test item for each context type.
  var contexts = ["page","selection","link","editable","image","video",
                  "audio"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    var title = "Add '" + context + "' to your inspiration list";
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "onclick": genericOnClick});
    console.log("'" + context + "' item:" + id);
  }