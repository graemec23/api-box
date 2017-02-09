const addresses = require('express').Router();

addresses.get('/', function(req, res, next) {

  const addresses= {
    Location: 'hello',
    Addresses: [
    "1 Attwoods Close, , , , , Chelmsford, Essex",
    "10 Attwoods Close, , , , , Chelmsford, Essex",
    "11 Attwoods Close, , , , , Chelmsford, Essex",
    "12 Attwoods Close, , , , , Chelmsford, Essex",
    "13 Attwoods Close, , , , , Chelmsford, Essex",
    "14 Attwoods Close, , , , , Chelmsford, Essex",
    "15 Attwoods Close, , , , , Chelmsford, Essex",
    "16 Attwoods Close, , , , , Chelmsford, Essex",
    "17 Attwoods Close, , , , , Chelmsford, Essex",
    "18 Attwoods Close, , , , , Chelmsford, Essex",
    "19 Attwoods Close, , , , , Chelmsford, Essex",
    "2 Attwoods Close, , , , , Chelmsford, Essex",
    "20 Attwoods Close, , , , , Chelmsford, Essex",
    "21 Attwoods Close, , , , , Chelmsford, Essex",
    "22 Attwoods Close, , , , , Chelmsford, Essex",
    "23 Attwoods Close, , , , , Chelmsford, Essex",
    "24 Attwoods Close, , , , , Chelmsford, Essex",
    "25 Attwoods Close, , , , , Chelmsford, Essex",
    "26 Attwoods Close, , , , , Chelmsford, Essex",
    "27 Attwoods Close, , , , , Chelmsford, Essex",
    "28 Attwoods Close, , , , , Chelmsford, Essex",
    "29 Attwoods Close, , , , , Chelmsford, Essex",
    "3 Attwoods Close, , , , , Chelmsford, Essex",
    "30 Attwoods Close, , , , , Chelmsford, Essex",
    "31 Attwoods Close, , , , , Chelmsford, Essex",
    "32 Attwoods Close, , , , , Chelmsford, Essex",
    "33 Attwoods Close, , , , , Chelmsford, Essex",
    "34 Attwoods Close, , , , , Chelmsford, Essex",
    "35 Attwoods Close, , , , , Chelmsford, Essex",
    "36 Attwoods Close, , , , , Chelmsford, Essex",
    "38 Attwoods Close, , , , , Chelmsford, Essex",
    "4 Attwoods Close, , , , , Chelmsford, Essex",
    "40 Attwoods Close, , , , , Chelmsford, Essex",
    "5 Attwoods Close, , , , , Chelmsford, Essex",
    "6 Attwoods Close, , , , , Chelmsford, Essex",
    "7 Attwoods Close, , , , , Chelmsford, Essex",
    "8 Attwoods Close, , , , , Chelmsford, Essex",
    "9 Attwoods Close, , , , , Chelmsford, Essex"
  ]
};
  res.json(addresses);

});

module.exports = addresses;
