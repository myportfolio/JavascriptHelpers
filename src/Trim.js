/*
Author: Rajesh Vedhamurthy
Description: Javascript trim methods to remove the leading and trailing spaces. This method is applied over the object used to call this method.

Note:
The regular expression pattern used in this script is explained below:

^ - Matches the search pattern at the beginning of the string passed
$ - Matches the search pattern at the end of the string passed
| - if used as (a|b|c), it matches either a or b or c. 
\s - Matches any whitespace character.

A whitespace character can be:

* A space character
* A tab character
* A carriage return character
* A new line character
* A vertical tab character
* A form feed character
*/

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
}
String.prototype.ltrim = function () {
    return this.replace(/^\s+/, "");
}
String.prototype.rtrim = function () {
    return this.replace(/\s+$/, "");
}