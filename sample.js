// function genericOnClick(info, tab) {
//     console.log("item " + info.menuItemId + " was clicked");
//     console.log("info: " + JSON.stringify(info));
//     console.log("tab: " + JSON.stringify(tab));
//     if(info["selectionText"]){
//       chrome.storage.sync.set({0: info["selectionText"]}, function() {
//         console.log('Value is set to ' + info["selectionText"]);
//       });
//       chrome.storage.sync.get(['0'], function(result) {
//         console.log('Value currently is ' + result[0]);
//       });
//     }
//     if(info["mediaType"]){
//       chrome.storage.sync.set({0: info["url"]}, function() {
//         console.log('Value is set to ' + info["url"]);
//       });
//       chrome.storage.sync.get(['0'], function(result) {
//         console.log('Value currently is ' + result[0]);
//       });
//     }
//   }

  function pageOnClick (info, tab){
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    chrome.storage.sync.set({data: info["pageUrl"], type: 'page'}, function() {
      console.log('pageUrl is set to ' + info["pageUrl"]);
    });
    chrome.storage.sync.get(['data', 'type'], function(result) {
      console.log(result.type + ' is set to ' + result.data);
    });
  }

  function selectionOnClick (info, tab){
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    chrome.storage.sync.set({data: info["selectionText"], type: 'selection'}, function() {
      console.log('selectionText is set to ' + info["selectionText"]);
    });
    chrome.storage.sync.get(['data', 'type'], function(result) {
      console.log(result.type + ' is set to ' + result.data);
    });
  }

  function linkOnClick (info, tab){
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    chrome.storage.sync.set({data: info["linkUrl"], type: 'link'}, function() {
      console.log('link is set to ' + info["linkUrl"]);
    });
    chrome.storage.sync.get(['data', 'type'], function(result) {
      console.log(result.type + ' is set to ' + result.data);
    });
  }

  function imageOnClick (info, tab){
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    chrome.storage.sync.set({data: info["srcUrl"], type: 'image'}, function() {
      console.log('image is set to ' + info["srcUrl"]);
    });
    chrome.storage.sync.get(['data', 'type'], function(result) {
      console.log(result.type + ' is set to ' + result.data);
    });
  }

  function audioOnClick (info, tab){
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
    chrome.storage.sync.set({data: info["srcUrl"], type: 'audio'}, function() {
      console.log('audio is set to ' + info["srcUrl"]);
    });
    chrome.storage.sync.get(['data', 'type'], function(result) {
      console.log(result.type + ' is set to ' + result.data);
    });
  }

  // function videoOnClick (info, tab){
  //   console.log("item " + info.menuItemId + " was clicked");
  //   console.log("info: " + JSON.stringify(info));
  //   console.log("tab: " + JSON.stringify(tab));
  //   chrome.storage.sync.set({data: info["srcUrl"], type: 'image'}, function() {
  //     console.log('image is set to ' + info["srcUrl"]);
  //   });
  //   chrome.storage.sync.get(['data', 'type'], function(result) {
  //     console.log(result.type + ' is set to ' + result.data);
  //   });
  // }
  
  // Create one test item for each context type.
  // Need to create a different onclick function for each type of context
  // var contexts = ["page","selection","link","editable","image","video",
  //                 "audio"];
  // for (var i = 0; i < contexts.length; i++) {
  //   var context = contexts[i];
  //   var title = "Add '" + context + "' to your inspiration list";
  //   var onclickname = `${context}OnClick`
  //   var id = chrome.contextMenus.create({"title": title, "contexts":[context],
  //                                        "onclick": onclickname});
  //   console.log("'" + context + "' item:" + id);
  // }

var pageId = chrome.contextMenus.create({
  "title": "Add page to your inspiration list", 
  "contexts": ['page'], 
  "onclick": pageOnClick
})

var selectionId = chrome.contextMenus.create({
  "title": "Add selection to your inspiration list", 
  "contexts": ['selection'], 
  "onclick": selectionOnClick
})

var linkId = chrome.contextMenus.create({
  "title": "Add link to your inspiration list", 
  "contexts": ['link'], 
  "onclick": linkOnClick
})

var imageId = chrome.contextMenus.create({
  "title": "Add image to your inspiration list", 
  "contexts": ['image'], 
  "onclick": imageOnClick
})

// var videoId = chrome.contextMenus.create({
//   "title": "Add video to your inspiration list", 
//   "contexts": ['video'], 
//   "onclick": videoOnClick
// })

var audioId = chrome.contextMenus.create({
  "title": "Add audio to your inspiration list", 
  "contexts": ['audio'], 
  "onclick": audioOnClick
})