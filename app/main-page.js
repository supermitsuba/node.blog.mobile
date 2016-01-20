var observableArray = require("data/observable-array");
var mainOptions = new observableArray.ObservableArray([]);
var observableModule = require("data/observable");
var pageData = new observableModule.Observable();
var frameModule = require("ui/frame");

exports.mainPageLoaded = function pageLoaded(args) {
	var page = args.object;
	if (page.ios) {

		// Tell the frame module that the navigation bar should always display
		frameModule.topmost().ios.navBarVisibility = "always";

		// Change the UIViewController's title property
		page.ios.title = "www.jordenlowe.com";

		// Get access to the native iOS UINavigationController
		var controller = frameModule.topmost().ios.controller;

		// Call the UINavigationController's setNavigationBarHidden method
		controller.navigationBarHidden = false;
	}
	
  var page = args.object;
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
				frameModule.topmost().navigate("Latest/latest-page");
				break;
    	case 1:
				frameModule.topmost().navigate("Search/search-page");
    		break;
			case 2:
				frameModule.topmost().navigate("Projects/project-page");
				break;
			case 3:
				frameModule.topmost().navigate("Categories/categories-page");
				break;
			case 4:
				frameModule.topmost().navigate("Events/events-page");
				break;
    	default:
    		break;
    }
};
