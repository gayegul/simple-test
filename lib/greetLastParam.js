'use strict';

var greetings = require('./simpleGreeting.js');
var hello3 = exports = module.exports = {};


hello3.findingResult = function() {
	var result = greetings.greet(process.argv[process.argv.length-1]);
	console.log(result);
	return result;
};

hello3.findingResult();