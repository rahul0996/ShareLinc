function clicked(info, tab) {
  logWhenClicked(info, tab);  
  if(info.mediaType == "image" && info.linkUrl != null){
  	alert("Posting video : " + info.linkUrl);
  }
  else if(info.mediaType == "image" && info.linkUrl == null && info.srcUrl != null){
  	alert("Posting image : " + info.srcUrl);
  }
  else if(info.selectionText != null && info.linkUrl == null){
  	alert("Posting selected text : " + info.selectionText);
  }
  else if(info.selectionText != null && info.linkUrl != null){
  	alert("Posting link : " + info.linkUrl);
  }
  else if(info.pageUrl != null){
  	alert("Posting page url : " + info.pageUrl);
  }
}

// Create one test item for each context type.
var contexts = ["page","selection","link","editable","image","video","audio"];
createContextMenu(contexts, clicked);

function createContextMenu(context, genericOnClick){
	var id = chrome.contextMenus.create({"title": "All Groups", "contexts":context, "onclick": genericOnClick});
	var parent = chrome.contextMenus.create({"title": "Select Group", "contexts":context});
	var child1 = chrome.contextMenus.create({"title": "Group 1", "contexts":context, "parentId": parent, "onclick": genericOnClick});
	var child2 = chrome.contextMenus.create({"title": "Group 2", "contexts":context, "parentId": parent, "onclick": genericOnClick});
}


function logWhenClicked(info, tab){
	console.log("item " + info.menuItemId + " was clicked");
	console.log("info: " + JSON.stringify(info));
	console.log("tab: " + JSON.stringify(tab));
}