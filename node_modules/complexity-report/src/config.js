'use strict';

var check = require('check-types');

module.exports = {
	isModuleComplexityThresholdSet: function isModuleComplexityThresholdSet (config) {
		return check.number(config.minmi);
	},

	isFunctionComplexityThresholdSet: function isFunctionComplexityThresholdSet (config) {
		return check.number(config.maxcyc) ||
			check.number(config.maxcycden) ||
			check.number(config.maxhd) ||
			check.number(config.maxhv) ||
			check.number(config.maxhe);
	},

	isProjectComplexityThresholdSet: function isProjectComplexityThresholdSet (config) {
    return check.number(config.maxfod) ||
			check.number(config.maxcost) ||
			check.number(config.maxsize);
	}
};
