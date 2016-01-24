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

exports.expandDetail = function(args) {
	var item = args.view;
	var index = args.index;
	list.getItem(args.index).showDetails = !list.getItem(args.index).showDetails;
	item.parent.refresh();
}

exports.viewArticle = function(args) {
	var page = args.object;
	var id = page['data-articleId'];

	var navigationEntry = {
	      moduleName : "views/articles/articles",
	      context : {
	              id : id
	      }
	};

	page.parent.parent.parent.parent.frame.navigate(navigationEntry);
}
