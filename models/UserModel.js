const Mongoose = require('mongoose');
const UserSchema = require('./UserSchema.js');

const dbUserName = process.env.MONGO_USERNAME;
const dbUserPass = process.env.MONGO_PSWD;

Mongoose.connect(`mongodb+srv://${dbUserName}:${dbUserPass}@cluster0-7pvfd.mongodb.net/time_reporting?retryWrites=true&w=majority`,
 { useNewUrlParser: true, useFindAndModify: false });

const UserModel = Mongoose.model('User', UserSchema);

const saveUser = (user) => {
    const newUser = new UserModel(user);
    return newUser.save();
};

const getUsers = () => {
    return UserModel.find().exec();
};

const getUserById = (id) => {
    return UserModel.findById(id).exec();
};

const updateUser = (id, user) => {
    return UserModel.findByIdAndUpdate(id, user, { new: true });
};

const deleteUser = (id) => {
    return UserModel.findByIdAndDelete(id);
};

const UserODM = {
    saveUser: saveUser,
    getUsers: getUsers,
    getUserById: getUserById,
    updateUser: updateUser,
    deleteUser: deleteUser
};

module.exports = UserODM;
