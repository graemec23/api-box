var mongoose = require('mongoose');

var brandSchema = {
	id: {
		type: Number,
		required: true,
		unique: true,
		index: true
	},
	description: String,
	categoryId: [

	],
	slug: String,
	isActive: {
		type: Boolean, default: true
	}
}

module.exports = mongoose.model('Brand', brandSchema, 'brand');