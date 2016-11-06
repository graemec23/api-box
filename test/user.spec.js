var should = require('chai').should(),
  express = require('express'),
  expect = require('chai').expect,
  mongoose = require('mongoose'),
  user = require('../app/models/userModel');

//var app = express(),
var app = express(),
  request = require('supertest').agent('http://localhost:3001/auth');

//tests if api is up

describe('Users', function() {

  var newUser = {
    id: 1,
    firstName: 'Iwona',
    lastName: 'Mech',
    userName: 'imech',
    email: 'imech@yahoo.com',
    gender: 'female',
    password: 'vodka',
    role: 'admin',
    isActive: false
    // address: {
    // 	id: 1,
    // 	type: 'home',
    // 	address1:'25 Attwoods Close',
    // 	address2: 'Galleywood',
    // 	city: 'Chelmsford',
    // 	county: 'Essex',
    // 	country: 'England',
    // 	postCode: 'cm2 8qj'
    // }
  };

  // after(function(done) {
  // 	request
  // 		.delete('/users/' + newUser.id)
  // 		.expect(204)
  // 		.end(function(err, res){
  // 			if (err) return done(err);
  // 			done();
  // 		});
  // });

  it('should return a 200 response', function(done) {
    request.get('/users').set('Accept', 'application/json').expect(200).end(function(err, res) {
      if (err)
        return done(err);
      done();
    });
  });
  it('should create a user and Address', function(done) {
    request.post('/users').send(newUser).set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function(err, res) {
      if (err)
        return done(err);

      //console.log(err, res)
      expect(res.body).to.be.an('object')
      //console.log(res.body)
      //expect(res.body).to.have.property('id');
      done();
    });
  });

  it('should open single record', function(done) {
    request.get('/users/1').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200).end(function(err, res) {
      if (err)
        return done(err);

      //console.log(res.body)
      // expect(res.body).to.have.property('firstName');
      // expect(res.body.firstName).to.not.equal(null);
      //

      expect(res.body.lastName).to.not.equal(null);
      expect(res.body).to.have.property('lastName');
      //
      expect(res.body).to.have.property('gender');
      expect(res.body.gender).to.not.equal(null);

      expect(res.body).to.have.property('role');
      expect(res.body.role).to.equal('admin');

      expect(res.body).to.have.property('address').that.is.an('array')
      // 	.with.deep.property('[0]')
      // 	.to.have.property('type');
      done();
    });
  });

  it('should open all users', function(done) {
    done();
  });

  it('should delete a user and Address', function(done) {
    done();
  });

  it('should update a user', function(done) {

    // request(app)
    // 	.send
    done();
  });

  // it('should return a 404', function(done) {
  // 	request.get('/api/users')
  // 		.set('Accept', 'application/json')
  // 		.expect(404)
  // 		.end(function(err, res){
  // 			if (err) return done(err);
  // 			done();
  // 		});
  // });

});
