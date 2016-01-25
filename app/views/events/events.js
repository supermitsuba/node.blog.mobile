var observableArray = require("data/observable-array");
var events = new observableArray.ObservableArray([]);
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();
var ios = require("../../shared/iosPageLoad.js");
var list = require("../../shared/displayList.js");
var application = require("application");

exports.eventPageLoaded = function (args) {
		var page = args.object;
		ios.iosPageLoad("Events", page);

    pageData.set("events", events);
    page.bindingContext = pageData;

    var url = "http://www.jordenlowe.com/api/events";
		list.LoadList(url, events);
};

exports.expandDetail = function(args) {
	var item = args.view;
	var index = args.index;
	var link = events.getItem(args.index).WebLink;
	var app = application.ios.nativeApp;
	app.openURL(NSURL.URLWithString(link));
}
