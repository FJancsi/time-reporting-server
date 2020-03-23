const Hapi = require('@hapi/hapi');
const UserHandler = require('./routes/UserHandler.js');
const UserValidation = require('./validations/UserValidation.js');
const consoleLogging = require('./utils/logging.js');

const server = Hapi.server({
  port: ~~process.env.PORT || 3000,
  host: '0.0.0.0',
  routes: {
    cors: {
      origin: ['*'],
      headers: ['Accept', 'Content-Type'],
      additionalHeaders: ['X-Requested-With']
    }
  }
});

server.route({
  path: '/',
  method: 'GET',
  handler: (req, h) => {
    return h.response('Time reporting server');
  }
});

server.route({
  path: '/users',
  method: 'GET',
  handler: UserHandler.getUsers
});

server.route({
  path: '/user/{id}',
  method: 'GET',
  handler: UserHandler.getUserById
});

server.route({
  path: '/user',
  method: 'POST',
  handler: UserHandler.saveUser,
  options: {
    validate: UserValidation.saveUserValidation
  }
});

server.route({
  path: '/user/{id}',
  method: 'PUT',
  handler: UserHandler.updateUser,
  options: {
    validate: UserValidation.updateUserValidation
  }
});

server.route({
  path: '/user/{id}',
  method: 'DELETE',
  handler: UserHandler.deleteUser
});

const start = async () => {
  await server.register([consoleLogging]);
  await server.start();
};

start();
