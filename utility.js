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


(function( $ ){
  $.number_with_delimeter = function(number, delimiter) {
      number = number + '', delimiter = delimiter || ',';
      var split = number.split('.');
      split[0] = split[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + delimiter);
      return split.join('.');
    }
})( jQuery );

