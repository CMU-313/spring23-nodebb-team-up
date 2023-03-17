'use strict';

var assert = require('chai').assert;
var config = require('../src/config');

suite('Configuration Checks', function () {
	suite('#isModuleComplexityThresholdSet', function () {
		test('null value', function () {
			assert.isFalse(
				config.isModuleComplexityThresholdSet({
					minmi: null
				})
			);
		});

		test('string value', function () {
			assert.isFalse(
				config.isModuleComplexityThresholdSet({
					minmi: 'test'
				})
			);
		});

		test('boolean value', function () {
			assert.isFalse(
				config.isModuleComplexityThresholdSet({
					minmi: true
				})
			);
		});

		test('object value', function () {
			assert.isFalse(
				config.isModuleComplexityThresholdSet({
					minmi: {}
				})
			);
		});

		test('number value', function () {
			assert.isTrue(
				config.isModuleComplexityThresholdSet({
					minmi: 10
				})
			);
		});		
	});

	suite('#isFunctionComplexityThresholdSet', function () {
		var fn = config.isFunctionComplexityThresholdSet;

		test('null value', function () {
			assert.isFalse(fn({ maxcyc:    null }));
			assert.isFalse(fn({ maxcycden: null }));
			assert.isFalse(fn({ maxhd: 	   null }));
			assert.isFalse(fn({ maxhv: 	   null }));
			assert.isFalse(fn({ maxhe: 	   null }));
		});

		test('string value', function () {
			assert.isFalse(fn({ maxcyc:    'test' }));
			assert.isFalse(fn({ maxcycden: 'test' }));
			assert.isFalse(fn({ maxhd: 	   'test' }));
			assert.isFalse(fn({ maxhv: 	   'test' }));
			assert.isFalse(fn({ maxhe: 	   'test' }));
		});

		test('boolean value', function () {
			assert.isFalse(fn({ maxcyc:    true }));
			assert.isFalse(fn({ maxcycden: true }));
			assert.isFalse(fn({ maxhd: 	   true }));
			assert.isFalse(fn({ maxhv: 	   true }));
			assert.isFalse(fn({ maxhe: 	   true }));
		});

		test('object value', function () {
			assert.isFalse(fn({ maxcyc:    {} }));
			assert.isFalse(fn({ maxcycden: {} }));
			assert.isFalse(fn({ maxhd: 	   {} }));
			assert.isFalse(fn({ maxhv: 	   {} }));
			assert.isFalse(fn({ maxhe: 	   {} }));
		});

		test('number value', function () {
			assert.isTrue(fn({ maxcyc: 	  10 }));
			assert.isTrue(fn({ maxcycden: 10 }));
			assert.isTrue(fn({ maxhd: 	  10 }));
			assert.isTrue(fn({ maxhv: 	  10 }));
			assert.isTrue(fn({ maxhe: 	  10 }));
		});
	});

	suite('#isProjectComplexityThresholdSet', function () {
		var fn = config.isProjectComplexityThresholdSet;

		test('null value', function () {
			assert.isFalse(fn({ maxfod:  null }));
			assert.isFalse(fn({ maxcost: null }));
			assert.isFalse(fn({ maxsize: null }));
		});

		test('string value', function () {
			assert.isFalse(fn({ maxfod:  'test' }));
			assert.isFalse(fn({ maxcost: 'test' }));
			assert.isFalse(fn({ maxsize: 'test' }));
		});

		test('boolean value', function () {
			assert.isFalse(fn({ maxfod:  true }));
			assert.isFalse(fn({ maxcost: true }));
			assert.isFalse(fn({ maxsize: true }));
		});

		test('object value', function () {
			assert.isFalse(fn({ maxfod:  {} }));
			assert.isFalse(fn({ maxcost: {} }));
			assert.isFalse(fn({ maxsize: {} }));
		});

		test('number value', function () {
			assert.isTrue(fn({ maxfod:  10 }));
			assert.isTrue(fn({ maxcost: 10 }));
			assert.isTrue(fn({ maxsize: 10 }));
		});
	});
});
