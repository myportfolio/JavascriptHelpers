/*
Author: Rajesh Vedhamurthy
Description:
Escapes/unescapes all the XML specific characters
*/

var Xml = {
	escape : function(s) {
		return s
			.replace(/&/g,'&amp;')
			.replace(/</g,'&lt;')
			.replace(/>/g,'&gt;')
			.replace(/"/g,'&quot;')
			.replace(/'/g,'&apos;');
	},
	unescape : function(s) {
		return s
			.replace(/&apos;/g,'\'')
			.replace(/&quot;/g,'"')
			.replace(/&gt;/g,'>')
			.replace(/&lt;/g,'<')
			.replace(/&amp;/g,'&');
	}
};
