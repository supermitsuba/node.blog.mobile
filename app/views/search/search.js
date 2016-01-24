var observableArray = require("data/observable-array");
var articles = new observableArray.ObservableArray([]);
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();
var ios = require("../../shared/iosPageLoad.js");
var list = require("../../shared/displayList.js");
var page = null;

exports.search = function() {
	var url = "http://www.jordenlowe.com/api/articles?q="+pageData.get('txtKeyword');
	list.LoadList(url, articles);
};

exports.searchPageLoaded = function (args) {
    page = args.object;
		if(page.navigationContext && page.navigationContext.CategoryType && page.navigationContext.CategoryType.length > 0)
		{
			var url = "http://www.jordenlowe.com/api/articles?category=" + page.navigationContext.CategoryType;
			list.LoadList(url, articles);
			ios.iosPageLoad("Search " + page.navigationContext.CategoryType, page);
		}
		else{
			ios.iosPageLoad("Search", page);
		}

		pageData.set("articles", articles);
		page.bindingContext = pageData;
};

exports.detail = list.expandDetail;

exports.viewArticle = list.viewArticle;
