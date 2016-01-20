var http = require("http");
var observableArray = require("data/observable-array");
var events = new observableArray.ObservableArray([]);
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();
var length = 0;

function receivedEvents(items) {

	for(var i = 0; i < length; i ++){
		events.pop();
	}

	for(var i =0; i < items.length; i++) {
			var item = items[i];
			events.push({
				text: item.EventDate + ': ' + item.EventName
			});
		}
		length = items.length;
}

function receivedError(e) {
		console.log('Error: '+e);
}

exports.eventPageLoaded = function (args) {
    var page = args.object;
    pageData.set("events", events);
    page.bindingContext = pageData;
    var url = "http://www.jordenlowe.com/api/events";
  	http.getJSON(url).then(receivedEvents, receivedError);
};
