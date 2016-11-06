/**
 * Created by graemechidgey on 29/05/2016.
 */


const addresses = require('express').Router();
const address = require('../../controllers/addressCtrl');


// .get(user.getUser);

addresses.get('/', address.getAddresses);


module.exports = addresses;