/*jslint browser: true */ /*global jQuery: true */

/**
* jQuery Utiltity plugin
*
* Copyright (c) 2011 Prasath Venkatraman

// TODO JsDoc

/**
* Provides number with delimeters
*
* @example $.number_with_delimeter(1000, ','); => 1,000
* @desc return the value with delimeters
*/

(function( $ ){
  $.number_with_delimeter = function(number, delimiter) {
      number = number + '', delimiter = delimiter || ',';
      var split = number.split('.');
      split[0] = split[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + delimiter);
      return split.join('.');
    }
	
   /**
   * equivalent of Ruby clear 	
   * Example usage: $.clear([1, 4]); returns a blank array [];   *
   */ 
	$.clear = function(array){
	    array.length = 0;
		return array;
	}
	
	/**
	* equivalent of Ruby empty?
	* Example usage: $.isEmpty(arr); returns a boolean based on whether given array is empty or not.
	*/
	$.isEmpty = function(array){
		return !!(array.length == 0)
	}
})( jQuery );

