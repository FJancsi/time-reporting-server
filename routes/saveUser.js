const fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

const getUsers = async () => {
    let data = await readFile('./users.json', 'utf-8');
    let users = JSON.parse(data);

    return users;
};

const saveUser = async user => {
    const users = await getUsers();

    users.users.push(user);
    await writeFile('./users.json', JSON.stringify(users));

    return 'User has been saved!';
};

const saveUserHandler = async (req, h) => {
    try {
        const user = req.payload;
        const save = await saveUser(user);
        return h.response(save);
    } catch (error) {
        return h.response(`Server error: ${error}`);
    }
};

module.exports = saveUserHandler;