const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const getUsers = async filter => {
    let data = await readFile('./users.json', 'utf-8');
    let users = JSON.parse(data);

    return filter ? users.users.filter(user => user.id === filter) : users;
};

const getUsersHandler = async (req, h) => {
    try {
        const users = await getUsers(req.params.id);
        return h.response(users);
    } catch (error) {
        return h.response(`Server error: ${error}`);
    }
}
module.exports = getUsersHandler;