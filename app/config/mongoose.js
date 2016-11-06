var mongoose = require("mongoose"),
    //userModel = require('../models/user'),
    //feedModel= require('../models/feeds'),
    //productModel = require('../models/product'),
    //subCategoryModel = require('../models/subCategoryModel'),
    //categoryModel = require('../models/categoryModel'),
    User = require('../models/userModel'),
    Address = require('../models/addressModel'),
    Product = require('../models/productModel'),
    Brand = require('../models/brandModel');

module.exports = function (config) {

    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Connection error..'));
    db.once('open', function callback() {
        console.log(config.db + ' Database opened...');
    });
};
