
var Product = require('mongoose').model('Product'),
    Address = require('mongoose').model('Address');

exports.getAllProducts = function(req, res) {
    Product.find(function (err, doc) {
        res.send(doc);
    });
};

exports.createProduct = function(req, res) {
    var product = new Product(req.body);
    product.save(function(err) {
        if (err) {
            res.send(err);
        };
        res.json({ message: 'Successfully added', data: product });
    });
};

exports.getProduct = function(req, res) {
    Product.findOne({ProductCode: req.params.id}, function (err, item) {
        if (err) {
            res.send(err);
        };
        //res.json(item);
        res.json({
            name: 'Graeme',
            slug: 'graeme-first'
        });
    });

};

exports.updateProduct = function(req, res) {
    var item = req.body;
    delete item._id;

    Product.update({id: req.params.id},item, function (err, num) {
        if (err) {
            res.send(err);
        };
        res.json({message: num + ' updated' })
    });
};

exports.deleteProduct = function(req, res) {
    Product.remove({id: req.params.id}, function(err, item) {
        if (err) {
            res.send(err);
        };
        res.json({ message: 'Successfully deleted' });
    });
};