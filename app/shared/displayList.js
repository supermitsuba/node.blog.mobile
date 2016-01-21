var http = require("http");

var func = null;
var list = null;
var length = 0;

function receivedArticles(items) {

	for(var i = 0; i < length; i ++){
		list.pop();
	}

	for(var i =0; i < items.length; i++) {
      var display = "";
      if(func) {
        display = func(items[i]);
      }
      else {
        display = items[i].toString();
      }
			list.push({
				text: display
			});
  }

	length = items.length;
}

function receivedError(e) {
		console.log('Error: '+e);
}

exports.LoadList = function(url, observable, funcForPropertyToLoad) {
  func = funcForPropertyToLoad;
  list = observable;
  http.getJSON(url).then(receivedArticles, receivedError);
}
