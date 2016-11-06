var User = require('mongoose').model('User'),
	Address = require('mongoose').model('Address');


exports.getAllUsers = function(req, res, next) {
	User.find({})
		.populate('address')
		.exec()
		.then(function(posts){
			res.json(posts);
		}, function(err){
			next(err);
		});
};

exports.getUser = function(req, res, next){
	User.findOne({id: req.params.id}, function (err, doc) {
		if(err) return next(err);

		res.json(doc);

	});
};


exports.createUser = function(req, res, next) {

	var user = new User(req.body);
	user.createdOn = Date.now();
	user.updatedOn = Date.now();
	//user.address  = req.body.address.id;

	user.save(function(err, doc) {
		if(err) return next(err);
			//console.log(doc)
		res.json(doc);


		// var address = new Address(req.body.address);
		//
		// address.userId = doc._id;
		//
		// address.save(function(err) {
		// 	if(err) return next(err);
		// });

	});
};

exports.deleteUser = function(req, res, next) {
	User.remove({}, function(err, doc) {
		if (err) {
			next(err);
		}
		res.json({message:'Successfully deleted'})
	});
};

exports.updateUser = function(req, res, next) {

	console.log(req.body)
	var item = req.body;
	delete item._id;

	User.update({id: req.params.jd}, item, function(err, num) {
		if(err) return next(err);

		res.json({message: num + 'updated'});
	});
};