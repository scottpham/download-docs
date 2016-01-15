#!/usr/bin/env node

var io = require('indian-ocean');
var path = require('path');
var tabletop = require('tabletop');
var parseKey = require('parse-ft-spreadsheet-key');
var program = require('commander');
var pkg = require(path.join(__dirname, 'package.json'));


program
	.version(pkg.version)
	.command('*')
	.usage('[options]')
	//short form, longform <type>, "documentation", coerce
	.option('-o, --output <string>', "filename w/out extension", "output")
	.option('-k, --key <url>', "key or url of your public google spreadsheet",
		parseKey)
	.parse(process.argv);

//use a default filename if none provided
var file = program.output + ".json";

var key = program.key;

var table = tabletop.init({
	key: key,
	callback: function(data, model) {

		var json = data.map(function(obj) {
			newObj = obj;
			return newObj;
		});

		var fileName = path.join(__dirname, file);

		io.writeDataSync(fileName, json);

	},
	simpleSheet: true
});
