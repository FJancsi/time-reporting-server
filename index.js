const Hapi = require('hapi');
const routes = require('./routes/routes');
const consoleLogging = require('./utils/logging.js');

const server = Hapi.server({
  port: ~~process.env.PORT || 3000,
  host: '0.0.0.0',
  routes: {
    cors: {
      origin: ['*']
    }
  }
});

server.route({
  path: '/users',
  method: 'GET',
  handler: routes.getUsersHandler
});

server.route({
  path: '/user/{id}',
  method: 'GET',
  handler: routes.getUsersHandler
});

server.route({
  path: '/user',
  method: 'PUT',
  handler: routes.saveUserHandler
});

const start = async () => {
  await server.register([consoleLogging]);
  await server.start();
};

start();
