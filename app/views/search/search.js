var observableArray = require("data/observable-array");
var articles = new observableArray.ObservableArray([]);
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();
var ios = require("../../shared/iosPageLoad.js");
var list = require("../../shared/displayList.js");

exports.search = function() {
	var url = "http://www.jordenlowe.com/api/articles?q="+pageData.get('txtKeyword');
	list.LoadList(url, articles);
};

exports.searchPageLoaded = function (args) {
    var page = args.object;
		ios.iosPageLoad("Search", page);

    pageData.set("articles", articles);
    page.bindingContext = pageData;
};
