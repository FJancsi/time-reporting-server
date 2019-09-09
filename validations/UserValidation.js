const Joi = require('joi');

const failAction = (req, h, error) => {
    return error.isJoi ? h.response(error.details[0]).code(400).takeover() : h.response(error).code(400).takeover();
};

const USER_NAME_LIMIT = 64;
const EMAIL_LIMIT = 255;

const saveUserValidation = {
    payload: {
        name: Joi.string().max(USER_NAME_LIMIT).required(),
        email: Joi.string().max(EMAIL_LIMIT).email().required(),
        loggedHours: Joi.array().required(),
        submittedDate: Joi.date().required()
    },
    failAction: failAction
};

const updateUserValidation = {
    payload: {
        name: Joi.string().max(USER_NAME_LIMIT).optional(),
        email: Joi.string().max(EMAIL_LIMIT).email().optional(),
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