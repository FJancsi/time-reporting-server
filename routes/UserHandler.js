const UserODM = require('../models/UserModel.js');

const getUsers = async (req, h) => {
    try {
        const users = await UserODM.getUsers();
        return h.response(users);
    } catch (error) {
        return h.response(`Server error: ${error}`).code(500);
    }
};

const getUserById = async (req, h) => {
    try {
        const user = await UserODM.getUserById(req.params.id);
        return h.response(user);
    } catch (error) {
        return h.response(`Server error: ${error}`).code(500);
    }
};

const saveUser = async (req, h) => {
    try {
        const result = await UserODM.saveUser(req.payload);
        return h.response(result);
    } catch (error) {
        return h.response(`Server error: ${error}`).code(500);
    }
};

const updateUser = async (req, h) => {
    try {
        const result = await UserODM.updateUser(req.params.id, req.payload);
        return h.response(result);
    } catch (error) {
        return h.response(`Server error: ${error}`).code(500);
    }
};

const deleteUser = async (req, h) => {
    try {
        const result = await UserODM.deleteUser(req.params.id);
        return h.response(result);
    } catch (error) {
        return h.response(`Server error: ${error}`).code(500);
    }
};

const UserHandler = {
    getUsers: getUsers,
    getUserById: getUserById,
    saveUser: saveUser,
    updateUser: updateUser,
    deleteUser: deleteUser
};

module.exports = UserHandler;