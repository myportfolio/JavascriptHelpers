/*
Author: Rajesh Vedhamurthy
Description: 
This utility method is used to parse the querystring and
mirrors the getParameter() method in other programming languages like Java.
*/

function getParameter(parameterName) {
    var objQRs = new Object();

    window.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"),
                function ($0, $1, $2, $3) { objQRs[$1] = $3; }); 

    return objQRs[parameterName];
}