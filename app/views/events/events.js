var observableArray = require("data/observable-array");
var events = new observableArray.ObservableArray([]);
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();
var ios = require("../../shared/iosPageLoad.js");
var list = require("../../shared/displayList.js");

exports.eventPageLoaded = function (args) {
		var page = args.object;
		ios.iosPageLoad("Events", page);

    pageData.set("events", events);
    page.bindingContext = pageData;

    var url = "http://www.jordenlowe.com/api/events";
		list.LoadList(url, events, function(item){ return item.EventDate + ': ' + item.EventName; });
};
