var Brand = require('mongoose').model('Brand');


exports.getBrand = function(req, res, next) {
	Brand.findOne({id: req.params.id}, function (err, doc) {
		if(err) return next(err);
		res.status(200).json(doc);
	});
};

exports.getAllBrands = function(req, res, next) {
	Brand.find(function (err, doc) {
		if(err) return next(err);
		res.status(200).json(doc);
	});
};

exports.createBrand = function(req, res, next) {
	var newBrand = new Brand(req.body);
	newBrand.save(function(err, doc) {
		if(err) return next(err);

		res.status(201).json(doc);
	});

};
exports.deleteBrand = function(req, res, next) {
	Brand.remove({id: req.params.id}, function(err, item) {
		if (err) return next(err);
		res.status(204).end();
	});
};

exports.updateBrand = function(req, res, next) {

	var item = req.body;
	delete item._id;
	
	//console.log('req.body', item);

	Brand.update({id: req.params.id}, item, function (err) {
		if(err) return next(err);

		res.status(204).end();
		//res.json({message: num + ' updated' });
	});
};

