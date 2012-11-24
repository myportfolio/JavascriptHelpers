/*
Author: Rajesh Vedhamurthy
Description: 
Creating a XML Http Request object would generally involved series of try, catch statements.
I have made an attempt here to get the objects from a factory till its succesfull.
This way, the code is more legible and modularized.
*/


var XMLHttpFactories = [
	function () {return new XMLHttpRequest()}, // mozilla or firefox
	function () {return new ActiveXObject("Msxml2.XMLHTTP")}, // IE
	function () {return new ActiveXObject("Msxml3.XMLHTTP")}, // IE
	function () {return new ActiveXObject("Microsoft.XMLHTTP")}, //IE
	function () {return window.createRequest()} //ICE browser
];

function createXMLHTTPObject() {
	var xmlhttp = false;
	for (var i=0;i<XMLHttpFactories.length;i++) {
		try {
			xmlhttp = XMLHttpFactories[i]();
		}
		catch (e) {
			continue;
		}
		break;
	}
	return xmlhttp;
}