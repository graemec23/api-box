var express = require('express'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  passport = require('passport'),
  logger = require('morgan');

module.exports = (app) => {
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
};
