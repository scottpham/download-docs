(function (root) {
  'use strict';

  var spreadsheetKeyRegex = /^[a-zA-Z0-9\-_]{30,60}$/; // seems to always be 44 chars, but
                                                       // accepting range of 30-60 just in case.
  var berthaHosts = [
    'spottiswood-tupp.herokuapp.com',
    'staging.bertha.ig.ft.com',
    'spottiswood.herokuapp.com',
    'bertha.ig.ft.com'
  ];

  var parseSpreadsheetKey = function (str, silent) {
    if (str.indexOf('http') === 0) {
      // Attempt to parse as Google URL
      if (str.indexOf('https://docs.google.com') === 0) {
        if (str.indexOf('?key=') === -1) {
          // It's a new-style URL.
          return str.split(/\/spreadsheets\/[^\/]+\//)
            .pop()
            .split('/')[0]
            .split('?')[0]
            .split('#')[0]
          ;
        }

        // It's an old-style URL.
        return (
          str.split('key=')
            .pop()
            .split('&')[0]
            .split('#')[0]
        );
      }

      // Attempt to parse as Bertha URL
      var afterProtocol = str.split('//')[1];
      for (var i = berthaHosts.length - 1; i >= 0; i--) {
        if (afterProtocol.indexOf(berthaHosts[i]) === 0)
          return (
            afterProtocol
              .split('?')[0]
              .split('/')[4]
          );
      }
    }

    if (!spreadsheetKeyRegex.test(str)) {
      if (!silent)
        throw new Error('Cannot parse spreadsheet key from value: ' + str);
      else
        return null;
    }

    // Must be a plain key
    return str;
  };

  // Export for Node or attach to IG namespace
  if (typeof module !== 'undefined' && module.exports)
    module.exports = parseSpreadsheetKey;
  else {
    /*jshint sub:true*/
    root['IG'] = root['IG'] || {};
    root['IG'].parseSpreadsheetKey = parseSpreadsheetKey;
    /*jshint sub:false*/
  }
}(this));
