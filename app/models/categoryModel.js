var mongoose = require('mongoose'),
	updatedOn = require('./plugins/updatedOn'),
	Schema = mongoose.Schema;

var categorySchema = new Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
		index: true
	},
	slug: {
		type: String,
		index: true
	},
	createdOn: {
		type: Date,
		default: Date.now
	},
	
	isActive: {
		type: Boolean,
		default: true
	}
});

categorySchema.plugin(updatedOn);

module.exports = mongoose.model('Category', categorySchema);