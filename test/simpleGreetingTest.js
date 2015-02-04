'use strict';

var expect = require('chai').expect;
var test = require('../lib/simpleGreeting.js');

describe('greet function', function(name){
	it('should return hello name', function(){
		expect(test.greet(name)).to.eql('hello ' + name);
	});
});