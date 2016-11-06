var jwt = require('jwt-simple'),
    User = require('../models/userModel.js'),
    env = process.env.NODE_ENV,
    config = require('../config/config')[env];

function createSendToken(user,res) {
    var payload = {
        sub: user.id
    },
    //hour = 3600000;
    minute = 60 * 1000;
    var token = jwt.encode(payload, config.secrets.jwt);

    res.cookie('auth-token', token, {
        //maxAge: 86400000,
        //maxAge: minute,
        maxAge : 3600000,
        //expires: new Date(Date.now() + 900000),
        httpOnly: true
    });

    res.status(200).send({msg: 'success'});
};

exports.register = function(req, res){
    var user = req.body;

    var newUser = new User({
        email: user.email,
        password: user.password
    });

    newUser.save(function(){
        createSendToken(newUser, req, res);
    });
};

exports.login = function(req, res) {

    req.user = req.body;
    console.log('req.body', req.body);

    var searchUser = {
        email: req.user.email

    };
    console.log(searchUser)

    User.findOne(searchUser, function(err, user){
        //console.log(err, user)
        if(err) throw err;

        if (!user){
            return res.status(401).send({success: false, msg:"User not found"});
        };

        user.comparePasswords(req.user.password, function(err, isMatch){
            if(err) throw err;

            if(!isMatch)
                return res.status(401).send({msg:"Wrong email/password"});

            createSendToken(user, res);
        });
    });
};

exports.logout = function(req, res) {
    res.clearCookie('auth-token').send({success:true, msg: "cookie deleted"});
};


exports.account = function(user, res) {

    var jobs = [
        'Cook',
        'SuperHero',
        'Unicorn Wisperer',
        'Toast Inspector'
    ];
    res.status(200).json(jobs);
};



