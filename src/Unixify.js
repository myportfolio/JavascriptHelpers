/*
Author: Rajesh Vedhamurthy
Description: Unixify all the lines in a given text.
i.e., replace \r\n with \n.
	\r?\n - zero or one occurance of \r, followed by \n
	|	-	OR
	\r	- all the occurances of \r
*/
	
String.prototype.unixify = function() {
	return this.replace( /\r?\n|\r/g, '\n' ); 
	
};
