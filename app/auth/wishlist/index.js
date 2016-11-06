const wishlists = require('express').Router();
const wishlist = require('../../controllers/addressCtrl');


wishlists.get('/', wishlist.getWishlist);


module.exports = wishlists;