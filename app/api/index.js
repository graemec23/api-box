const routes = require('express').Router();
const products = require('./product');
const brands = require('./brands');
const addresses = require('./addresses');

routes.use('/brands', brands);
routes.use('/product', products);
routes.use('/addresses', addresses);

routes.get('/', function(req, res) {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;
