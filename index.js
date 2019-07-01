const Hapi = require("hapi");
const Good = require("good");
const GoodConsole = require("good-console");
const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const server = Hapi.server({
  port: ~~process.env.PORT || 3000,
  host: '0.0.0.0',
  routes: {
    cors: {
      origin: ["*"]
    }
  }
});

const getUsers = async filter => {
  let data = await readFile("./users.json", "utf-8");
  let users = JSON.parse(data);

  return filter ? users.users.filter(user => user.id === filter) : users;
};

const saveUser = async user => {
  const users = await getUsers();

  users.users.push(user);
  await writeFile("./users.json", JSON.stringify(users));

  //return { "response": "user has been saved" };
  return "User has been saved!";
};

const consoleLogging = {
  plugin: Good,
  options: {
    ops: {
      interval: 1000
    },
    reporters: {
      consoleReporter: [
        {
          module: "good-squeeze",
          name: "Squeeze",
          args: [{ response: "*", log: "*" }]
        },
        {
          module: "good-console"
        },
        "stdout"
      ]
    }
  }
};

server.route({
  path: "/users",
  method: "GET",
  handler: async (req, h) => {
    try {
      const users = await getUsers();
      return h.response(users);
    } catch (error) {
      return h.response(`Server error: ${error}`);
    }
  }
});

server.route({
  path: "/user/{id}",
  method: "GET",
  handler: async (req, h) => {
    try {
      const users = await getUsers(encodeURIComponent(req.params.id));
      return h.response(users);
    } catch (error) {
      return h.response(`Server error: ${error}`);
    }
  }
});

server.route({
  path: "/user",
  method: "PUT",
  handler: async (req, h) => {
    try {
      const user = req.payload;
      const save = await saveUser(user);
      return h.response(save);
    } catch (error) {
      return h.response(`Server error: ${error}`);
    }
  }
});

const start = async () => {
  await server.register([consoleLogging]);
  await server.start();
};

start();
