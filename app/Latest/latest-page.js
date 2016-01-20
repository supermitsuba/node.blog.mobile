var http = require("http");
var observableArray = require("data/observable-array");
var articles = new observableArray.ObservableArray([]);
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();
var length = 0;

function receivedArticles(items) {

	for(var i = 0; i < length; i ++){
		articles.pop();
	}

	for(var i =0; i < items.length; i++) {
			var item = items[i];
			articles.push({
				text: item.Title
			});
		}
		length = items.length;
}

function receivedError(e) {
		console.log('Error: '+e);
}

exports.latestPageLoaded = function (args) {
    var page = args.object;
    pageData.set("articles", articles);
    page.bindingContext = pageData;
  	var url = "http://www.jordenlowe.com/api/articles?limit=15";
  	http.getJSON(url).then(receivedArticles, receivedError);
};
