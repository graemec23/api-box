const path = require('path');

const rootPath = path.join(__dirname, '/../../');
const JWT = process.env.JWT;
const GETADDRESSKEy = process.env.JWT;

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
    db: process.env.DB_URL,
    rootPath: rootPath,
    port: process.env.PORT || 80,
    secrets: {
      jwt: JWT,
    },
  },
};
