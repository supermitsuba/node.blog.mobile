var observableArray = require("data/observable-array");
var articles = new observableArray.ObservableArray([]);
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();
var ios = require("../../shared/iosPageLoad.js");
var list = require("../../shared/displayList.js");

exports.latestPageLoaded = function (args) {
	  var page = args.object;
	  ios.iosPageLoad("Latest Articles", page);

    pageData.set("articles", articles);
    page.bindingContext = pageData;

  	var url = "http://www.jordenlowe.com/api/articles?limit=15";
		list.LoadList(url, articles, function(item){ return item.Title; });
};
