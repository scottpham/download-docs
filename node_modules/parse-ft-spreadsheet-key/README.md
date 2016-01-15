# parse-ft-spreadsheet-key

Simple function to parse the spreadsheet key out from an FT Google Sheets URL or Bertha URL.


## install

### front-end

```sh
$ bower install --save parse-ft-spreadsheet-key
```

```html
<script src="bower_components/parse-ft-spreadsheet-key/index.js"></script>
```

The function will be available as `IG.parseSpreadsheetKey(str)`.


### node.js

```sh
$ npm install --save-dev  parse-ft-spreadsheet-key
```

```js
var parseSpreadsheetKey = require('parse-ft-spreadsheet-key');
```


## usage

```js
var key = parseSpreadsheetKey('https://docs.google.com/a/ft.com/spreadsheets/d/0Ajt08GcPGJRbdFJUZWZfZ6M1V0xDaTFBckJnNENC8Gc/edit#gid=0');

// key === '0Ajt08GcPGJRbdFJUZWZfZ6M1V0xDaTFBckJnNENC8Gc'
```

Notes:

* takes valid Bertha URL or Google Spreadsheets URL
* if you pass a plain key on its own, it will return it untouched
* throws an error if something invalid is found, unless you pass `true` as a second argument (`silent`), in which case it just returns null

[![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

[travis-url]: http://travis-ci.org/callumlocke/parse-ft-spreadsheet-key
[travis-image]: https://secure.travis-ci.org/callumlocke/parse-ft-spreadsheet-key.png?branch=master

[depstat-url]: https://david-dm.org/callumlocke/parse-ft-spreadsheet-key
[depstat-image]: https://david-dm.org/callumlocke/parse-ft-spreadsheet-key.png
