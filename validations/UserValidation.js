const Joi = require('joi');

const failAction = (req, h, error) => {
    return error.isJoi ? h.response(error.details[0]).code(400).takeover() : h.response(error).code(400).takeover();
};

const saveUserValidation = {
    payload: {
        name: Joi.string().required(),
        email: Joi.string().required(),
        loggedHours: Joi.array().required(),
        submittedDate: Joi.date().required()
    },
    failAction: failAction
};

const updateUserValidation = {
    payload: {
        name: Joi.string().optional(),
        email: Joi.string().optional(),
        loggedHours: Joi.array().optional(),
        submittedDate: Joi.date().optional()
    },
    failAction: failAction
};

const UserValidation = {
    saveUserValidation: saveUserValidation,
    updateUserValidation: updateUserValidation
};

module.exports = UserValidation;