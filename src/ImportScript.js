/*
Author: Rajesh Vedhamurthy
Description: 
Import a .js file during run time.
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

	function importScript( src  ){
		if( src.trim().length == 0 )
			return false;
		var script = document.createElement('SCRIPT');
		script.type = 'text/javascript';
		script.src = src + ( src.indexOf('?') != -1 ? '&' : '?' ) + '__disableCache=' + ( Math.random() );
		document.getElementsByTagName('head')[0].appendChild(script);
		return true;
	}