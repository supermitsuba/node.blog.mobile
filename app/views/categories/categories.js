var observableArray = require("data/observable-array");
var categories = new observableArray.ObservableArray([]);
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();
var ios = require("../../shared/iosPageLoad.js");
var list = require("../../shared/displayList.js");

exports.categoryPageLoaded = function (args) {
		var page = args.object;
		ios.iosPageLoad("Categories", page);

    pageData.set("categories", categories);
    page.bindingContext = pageData;

    var url = "http://www.jordenlowe.com/api/categories";
		list.LoadList(url, categories, function(item){ return item.CategoryType; });
};
