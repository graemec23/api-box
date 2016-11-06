var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var addressSchema = new Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
		index: true
	},
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
	//userId: { type: Number, ref: 'User' },
	type: String,
	address1: String,
	address2: String,
	city: String,
	county: String,
	country: String,
	postCode: String
});


module.exports = mongoose.model('Address', addressSchema, 'addresses');