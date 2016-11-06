const users = require('express').Router();
const user = require('../../controllers/userCtrl');


// .get(user.getUser);
users.get('/', user.getAllUsers);
users.post('/', user.createUser);
users.get('/:id', user.getUser);
users.delete('/:id', user.deleteUser);
users.put('/:id', user.updateUser);


module.exports = users;