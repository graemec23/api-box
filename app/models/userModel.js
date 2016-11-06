var mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs'),
	updatedOn = require('./plugins/updatedOn')
	Schema = mongoose.Schema,
	SALT_FACTOR = 10;

var userSchema = new Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
		index: true
	},
	firstName: String,
	lastName: String,
	userName: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	gender: String,
	telephone: Number,
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		default: 'user'
	},
	address: [{ type: Number, ref: 'Address' }],
	// address: [{ type: Schema.Types.ObjectId, ref: 'Address' }],
	//address: [addressSchema],
	createdOn: {
		type: Date,
		default: Date.now
	},
	lastLogin: Date,
	isActive: {
		type: Boolean, 
		default: true
	}
});

userSchema.plugin(updatedOn);

// userSchema.methods.toJSON = function () {
// 	var user = this.toObject();
// 	delete user.password;
// 	return user;
// };

userSchema.methods.comparePasswords = function(password, done) {
   bcrypt.compare(password, this.password, function(err, isMatch) {
	   done(err, isMatch);
   });
};

userSchema.pre('save', function(next) {
   var user = this;

   if(!user.isModified('password')){
       return next();
   }

   bcrypt.genSalt(SALT_FACTOR, function(err, salt) {

       if(err) return next(err);

       bcrypt.hash(user.password, salt, null, function(err, hash) {
	       if(err) return next(err);

           user.password = hash;
           next();
       });
   });
});

module.exports = mongoose.model('User', userSchema, 'user');
