var returnData = "";
var returnState = "";

var Im = {
	getWindowSize : function() {
		var client = {
			x : 0,
			y : 0
		};

		if ( typeof document.compatMode != 'undefined' && document.compatMode == 'CSS1Compat') {
			client.x = document.documentElement.clientWidth;
			client.y = document.documentElement.clientHeight;
		} else if ( typeof document.body != 'undefined' && (document.body.scrollLeft || document.body.scrollTop)) {
			client.x = document.body.clientWidth;
			client.y = document.body.clientHeight;
		}
		return client;
	}
}; 