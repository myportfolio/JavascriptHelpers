/*
Author: Rajesh Vedhamurthy
Description: Add/remove an event listener to/from a DOM element.

*/


function addEventToObj(obj,evt,fn) {
	if (obj.addEventListener) {
		obj.addEventListener(evt,fn,false);
	}else if (obj.attachEvent){ //for IE < 9
		obj.attachEvent('on'+evt,fn);
	}
}

function removeEventFromObj(obj,evt,fn) {
	if (obj.removeEventListener){
		obj.removeEventListener(evt,fn,false);
	}else if (obj.detachEvent) { //for IE < 9
		obj.detachEvent('on'+evt,fn);
	}
}