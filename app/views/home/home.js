var observableArray = require("data/observable-array");
var mainOptions = new observableArray.ObservableArray([]);
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();
var frameModule = require("ui/frame");
var ios = require("../../shared/iosPageLoad.js");

exports.mainPageLoaded = function pageLoaded(args) {
	var page = args.object;
	ios.iosPageLoad("My Blog", page);

  if(mainOptions.length == 0) {
    mainOptions.push({text:"Latest"});
    mainOptions.push({text:"Search"});
    mainOptions.push({text:"Projects"});
    mainOptions.push({text:"Categories"});
    mainOptions.push({text:"Events"});
	}

  page.bindingContext = pageData;
	pageData.set("mainOptions", mainOptions);
};

exports.onTap = function(args){
    switch(args.index){
			case 0:
				frameModule.topmost().navigate("views/latest/latest");
				break;
    	case 1:
				frameModule.topmost().navigate("views/search/search");
    		break;
			case 2:
				frameModule.topmost().navigate("views/projects/projects");
				break;
			case 3:
				frameModule.topmost().navigate("views/categories/categories");
				break;
			case 4:
				frameModule.topmost().navigate("views/events/events");
				break;
    	default:
    		break;
    }
};
