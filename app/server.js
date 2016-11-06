const app = require('express')();
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

require('./config/express')(app);
require('./config/mongoose')(config);
require('./config/passport')(config);

const api = require('./api');
const auth = require('./auth');

app.use('/api/v1', api);
app.use('/auth', auth);

app.listen(config.port);
console.log("Magik happens on " + config.port + "...");

module.exports = app;
