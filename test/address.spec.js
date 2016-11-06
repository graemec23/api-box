var should = require('chai').should(),
  express = require('express'),
  expect = require('chai').expect,
  mongoose = require('mongoose');

var app = express(),
  request = require('supertest').agent('http://localhost:3001/api/v1');

describe('addresses', function() {

  var newAddress = {};

  // after(function(done) {
  // 	request
  // 		.delete('/addresses/' + newAddress.id)
  // 		.expect(204)
  // 		.end(function(err, res){
  // 			if (err) return done(err);
  // 			done();
  // 		});
  // });

  it('Should create a new address and update user with ID', function(done) {
    done();
  });

  it('Should return a address', function(done) {
    done();
  });

  it('should return all addresses based on userId', function(done) {
    done();
  });

  it('should update a address', function(done) {
    done();
  });

  it('should delete a address', function(done) {
    done();
  })

});
