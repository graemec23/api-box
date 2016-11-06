const routes = require('express').Router(),
  // passport = require('passport'),
  // addresses = require('./addresses'),
  // wishlist = require('./wishlist'),
  users = require('./users'),
  auth = require('./../controllers/authCtrl');

// routes which require auth
// routes.use('/addresses', passport.authenticate('jwt', { session: false }),addresses);
routes.use('/users', users);

// routes.use('/wishlist', passport.authenticate('jwt', { session: false }), wishlist);

routes.use('/login', auth.login);
routes.use('/register', auth.register);
routes.use('/logout', auth.logout);
// routes.get('/account',  passport.authenticate('jwt', { session: false }), auth.account);

// login
//

module.exports = routes;
