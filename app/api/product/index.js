const products = require('express').Router();
const product = require('../../controllers/productCtrl');
// .get(user.getUser);

products.get('/', product.getAllProducts);
products.post('/', product.createProduct);
products.get('/:id', product.getProduct);
// products.delete('/:id', user.deleteUser);
// products.put('/:id', user.updateUser);

module.exports = products;
