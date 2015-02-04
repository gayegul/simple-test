'use strict';

var expect = require('chai').expect;
var greetWell = require('../lib/greetLastParam.js');


describe('greetWell', function() {
	it('should greet people', function() {
		process.argv[2] = "chloe";
		expect(greetWell.findingResult()).to.eql('hello chloe');
	});
});