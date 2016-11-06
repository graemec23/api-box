const path = require('path');

const rootPath = path.join(__dirname, '/../../');
const JWT = process.env.JWT || 'slacker';

module.exports = {
  test: {
    db: 'mongodb://localhost/testersRock',
    rootPath: rootPath,
    port: process.env.PORT || 3001,
    secrets: {
      jwt: JWT,
    },
  },

  development: {
    db: 'mongodb://localhost/rtesters',
    rootPath: rootPath,
    port: process.env.PORT || 3000,
    secrets: {
      jwt: JWT,
    },
  },

  production: {
    db: 'mongodb://graeme:dental12345@ds043168.mlab.com:43168/rtestersrock',
    rootPath: rootPath,
    port: process.env.PORT || 80,
    secrets: {
      jwt: JWT,
    },
  },
};
