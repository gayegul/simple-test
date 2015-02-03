'use strict';

var expect = require('chai').expect;
var test = require('../lib/simpleTest');

describe('greet function', function(name){
	it('should return hello name', function(){
		expect(test.greet(name)).to.eql('hello ' + name);
	});
});