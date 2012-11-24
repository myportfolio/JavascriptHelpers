/*

Author: Rajesh Vedhamurthy
Description: Methods to create, erase and read cookies.
Create cookie has additional parameter to set the expires value for the cookie.

*/

function createCookie(name, value, days) {
    if (days) { // if days param is <=0, default it to empty string
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function readCookie(name) {
    var nameWithEqSign = name + "=";
    var cookieArr = document.cookie.split(';');
    for (var i = 0; i < cookieArr.length; i++) {
        var c = cookieArr[i];
		c=c.replace(/^\s+/, ""); //trims any leading whitespace characters.
        if (c.indexOf(nameWithEqSign) == 0)
            return c.substring(nameWithEqSign.length, c.length);
    }
    return null;
}
