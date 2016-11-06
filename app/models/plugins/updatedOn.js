var mongoose = require('mongoose');

module.exports = exports = function updatedOn(schema, options) {
	schema.add({updatedOn: Date});

	schema.pre('save', function(next) {
		this.updatedOn = Date.now();
		next();
	});
};