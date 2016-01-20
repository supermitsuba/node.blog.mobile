var http = require("http");
var observableArray = require("data/observable-array");
var categories = new observableArray.ObservableArray([]);
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();
var length = 0;

function receivedCategories(items) {

	for(var i = 0; i < length; i ++){
		categories.pop();
	}

	for(var i =0; i < items.length; i++) {
			var item = items[i];
			categories.push({
				text: item.CategoryType
			});
		}
		length = items.length;
}

function receivedError(e) {
		console.log('Error: '+e);
}

exports.categoryPageLoaded = function (args) {
    var page = args.object;
    pageData.set("categories", categories);
    page.bindingContext = pageData;
    var url = "http://www.jordenlowe.com/api/categories";
  	http.getJSON(url).then(receivedCategories, receivedError);
};
