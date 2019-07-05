const getUsersHandler = require('./getUsers');
const saveUserHandler = require('./saveUser');

const routes = {
    getUsersHandler: getUsersHandler,
    saveUserHandler: saveUserHandler
};

module.exports = routes;