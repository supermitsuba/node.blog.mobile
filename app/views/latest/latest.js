var observableArray = require("data/observable-array");
var articles = new observableArray.ObservableArray([]);
var observableModule = require("data/observable");
var dataToLoad = new observableModule.Observable();
var ios = require("../../shared/iosPageLoad.js");
var list = require("../../shared/displayList.js");

exports.latestPageLoaded = function (args) {
	  var page = args.object;
	  ios.iosPageLoad("Latest Articles", page);

    dataToLoad.articles = articles;
		dataToLoad.s = 'collapsed';
    page.bindingContext = dataToLoad;

  	var url = "http://www.jordenlowe.com/api/articles?limit=15";
		list.LoadList(url, articles);
};

exports.detail = function(args) {
	var item = args.view;
	var index = args.index;
	articles.getItem(args.index).showDetails = !articles.getItem(args.index).showDetails;
	item.parent.refresh();
}

exports.hideSummary = function(args) {
	// dataToLoad.s = 'visible';
	// args.object.bindingContext = dataToLoad;
}
