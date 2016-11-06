const passport = require('passport');
const mongoose = require('mongoose');
cost JwtStrategy = require('passport-jwt').Strategy;
const User = mongoose.model('User');

var cookieExtractor = function(req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['auth-token'];
  }
  return token;
};

module.exports = function (config) {
  const opts = {};
  opts.jwtFromRequest = cookieExtractor;
  opts.secretOrKey = config.secrets.jwt;

  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.sub }).exec(function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};
