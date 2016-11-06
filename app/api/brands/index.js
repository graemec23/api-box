const brands = require('express').Router();
const brand = require('../../controllers/brandCtrl');

brands.get('/', brand.getAllBrands);
brands.post('/', brand.createBrand);
brands.get('/:id', brand.getBrand);
brands.delete('/:id', brand.deleteBrand);
brands.put('/:id', brand.updateBrand);

module.exports = brands;
