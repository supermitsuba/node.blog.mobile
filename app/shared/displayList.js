var http = require("http");

var list = null;
var length = 0;

function receivedItems(items) {

	for(var i = 0; i < length; i ++){
		list.pop();
	}

	for(var i =0; i < items.length; i++) {
		  items[i].showDetails = false;
			list.push(items[i]);
  }

	length = items.length;
}

function receivedError(e) {
		console.log('Error: '+e);
}

exports.LoadList = function(url, observable) {
  list = observable;
  http.getJSON(url).then(receivedItems, receivedError);
}
