var should = require('chai').should(),
	express = require('express'),
	expect = require('chai').expect,
	mongoose = require('mongoose');

var app = express(),
	request = require('supertest').agent('http://localhost:3001/api/v1');


describe('Product', function() {

	// var newProduct = {
	// 	description: '',
	// 	categoryId:,
	// 	brandId:,
	// 	slug:,
	// 	price:,
	// 	isActive: true
	// };


	it('should return a 200 response', function (done) {
		request
			.get('/products')
			.set('Accept', 'application/json')
			.expect(404)
			.end(function(err, res){
				if (err) return done(err);
				done();
			});
	});

	//  it('should open a record', function(done) {
	//
	// });

	// it('should open all products', function(done) {
	//
	// });

	it('should create a product', function(done) {
		// request
		// 	.post('/products')
		// 	.send()
		// 	.expect('Content-Type', /json/)
		// 	.expect(200)
		// 	.end(function(err, res) {
		// 		if (err) return done(err);
		//
		// 		// expect(res.body).to.have.property('');
		// 		// expect(res.body).to.have.property('');
		// 		// expect(res.body).to.have.property('');
		// 		// expect(res.body).to.have.property('');
		// 		// expect product should have a title
		// 		// expect product should have a brand
		// 		// expect product sh
		// 		done();
		//});
		done();
	});

	it('should delete a product', function(done) {
		done();
	});

	it('should update  product', function(done) {
		done();
	});

	// it('should', function(done) {
	//
	// });


	// it('should', function(done) {
	//
	// });
});
