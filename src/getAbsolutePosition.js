/*

Author: Rajesh Vedhamurthy
Description: getAbsPos() is a method to find the absolute position of a given element in the browser's document.

*/

function __getIEVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

var __userAgent = navigator.userAgent;
var __isIE =  navigator.appVersion.match(/MSIE/) != null;
var __IEVersion = __getIEVersion();
var __isIENew = __isIE && __IEVersion >= 8;
var __isIEOld = __isIE && !__isIENew;



//returns the absolute position of some element within document
function getAbsPos(elemID) {
	var element;
	if (typeof(elemID) == "string")	{
		element = document.getElementById(elemID);
	}
	else {
		element = elemID;
	}

	var res = new Object();
	res.x = 0; res.y = 0;
	if (element !== null) {
    		res.x = element.offsetLeft;

		var offsetParent = element.offsetParent;
		var offsetParentTagName = offsetParent != null ? offsetParent.tagName.toLowerCase() : "";

	    if (__isIENew  && offsetParentTagName == 'td') {
		    res.y = element.scrollTop;
		}
		else {
		    res.y = element.offsetTop;
		}
    	
		var parentNode = element.parentNode;
	
		while (offsetParent != null) {
			res.x += offsetParent.offsetLeft;
			res.y += offsetParent.offsetTop;
			
			var parentTagName = offsetParent.tagName.toLowerCase();	

		    
			if (offsetParent != document.body && offsetParent != document.documentElement) {
				res.x -= offsetParent.scrollLeft;
				res.y -= offsetParent.scrollTop;
			}


   			parentNode = offsetParent.parentNode;
	    	offsetParent = offsetParent.offsetParent;
		}
	}
    return res;
}
