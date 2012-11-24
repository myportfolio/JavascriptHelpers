/*

Author: Rajesh Vedhamurthy
Description: 
Often, we find ourselves to avoid our pages to be framed.
To prevent framing, I have this utility called frameBuster.

params:
listOfUrls - Array of whitelist urls which are allowed to frame this url.
bWhiteList - if true, listOfUrls will be treated as whitelist urls. else, will be treated as blacklist urls.
*/


function frameBuster(listOfUrls, bWhiteList){
	if (bWhiteList == 'false') {	
		bWhiteList = 0; //to accept the string value 'false' as boolean false
	}else{
		bWhiteList =  new Boolean(bWhiteList); // to convert any non-boolean values to boolean.
	}
	if (window!= top){ // framed 
		if (bWhiteList ? !(listOfUrls.contains(document.referrer)): (listOfUrls.contains(document.referrer))){
			top.location.href=location.href; // bust the frame and replace top with the framed url.
		}
	}
}

Array.prototype.contains = function(o) {
  var i,l;
  if (!(l = this.length)) { return false; } // for empty arrays;
  for (i=0; i<l; i++) {
    if (o==this[i]) {
      return true;
    }
  }
  return false; //if the object is not available in the array.
};