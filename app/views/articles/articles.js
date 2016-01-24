var http = require("http");
var observableModule = require("data/observable");
var dataToLoad = new observableModule.Observable();
var ios = require("../../shared/iosPageLoad.js");
var page = null;

exports.articleLoaded = function (args) {
	  page = args.object;
    ios.iosPageLoad("Loading...", page);

    var url = "http://www.jordenlowe.com/api/articles/" + page.navigationContext.id;
    http.request({
      url: url,
      method: "GET",
      headers: { "Accept": "application/vnd.hal+json" }
    }).then(receivedItem, receivedError);

};

function receivedItem(item) {

  dataToLoad.article = item.content.toJSON();
  ios.iosPageLoad(dataToLoad.article.Title, page);
  page.bindingContext = dataToLoad;
}

function receivedError(e) {
		console.log('Error: '+e);
}
