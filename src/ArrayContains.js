/*
Author: Rajesh Vedhamurthy
Description: This utility method returns true if the array contains the passed object.
*/

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

/* Below method is for associative arrays where
 the index of array is non-numeric */
 
function containsKey(o, lookupKey){
	var key, l;
	if (!(Object.keys(myArray).length)) { return false; } //for empty associative arrays.
	for (key in o) {
        if (o.hasOwnProperty(key)) {
			return true;
		}
    }
	return false;//if the object is not available in the array.
}
