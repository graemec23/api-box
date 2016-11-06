var mongoose = require("mongoose");

var should = require('chai').should(),
	express = require('express'),
	expect = require('chai').expect;


var app = express(),
	request = require('supertest').agent('http://localhost:3001/api/v1');


describe('Brands', function () {

	var newBrand = {
		"id": 1,
		"description": "prada",
		"slug": "sfsdfsdfsdfsd",
		"isActive": true,
		"categoryId": 1
	};


	after(function (done) {
		request
			.delete('/brands/' + newBrand.id)
			.expect(204)
			.end(function (err, res) {
				if (err) return done(err);
				done();
			});
	});


	it('should create a new brand', function (done) {
		request
			.post('/brands')
			.send(newBrand)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(201)
			.end(function (err, res) {
				if (err) return done(err);
				//console.log(err, res)
				expect(res.body).to.be.an('object')
				//console.log(res.body)
				//expect(res.body).to.have.property('id');
				done();
			});
	});

	it('should return single brand', function (done) {
		request
			.get('/brands/1')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function (err, res) {
				if (err) return done(err);
				expect(res.body).to.have.property('_id');
				expect(res.body._id).to.not.equal(null);
				expect(res.body).to.have.property('id');
				expect(res.body.id).to.equal(1);
				expect(res.body).to.have.property('description');
				expect(res.body.description).to.equal('prada');
				expect(res.body).to.have.property('isActive');
				expect(res.body.isActive).to.equal(true);
				expect(res.body).to.have.property('slug');
				expect(res.body.slug).to.be.equal('sfsdfsdfsdfsd');
				expect(res.body).to.have.property('categoryId').that.is.an('array');
				//.with.deep.property('[0]').to.have.property('type');
				done();
			});

	});
	it('should return all brands', function (done) {
		request
			.get('/brands/')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function (err, res) {
				if (err) return done(err);
				expect(res.body).to.be.an('array');
				done();
			});
	});

	it('should update a brand', function (done) {
		request
			.put('/brands/' + newBrand.id)
			.send({
				slug: 'graeme'
			})
			.set('Accept', 'application/json')
			.expect(204)
			.end(function (err, res) {
				if (err) return done(err);
				//console.log(res.body)
				//expect(res.body.slug).to.equal('new');
				done();
			});

	})

	it('should delete a brand', function (done) {
		request
			.post('/brands')
			.send({
				"id": 2,
				"description": "New stuff",
				"slug": "sfsdfsdfsdfsd",
				"isActive": false
			})
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(201)
			.end(function (err, res) {
				if (err) return done(err);
				var user = res.body;
				request
					.delete('/brands/' + user.id)
					.expect(204)
					.end(function (err, res) {
						if (err) return done(err);
						//expect(res.body).to.equal(user);
						done();
					});
			});
	});
});