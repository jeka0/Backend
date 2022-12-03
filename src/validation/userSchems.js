const { Joi, Segments } = require('celebrate');

const userId = {
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}

const AccessTokenExists = {
    [Segments.HEADERS]: Joi.object().keys({
        accesstoken: Joi.string().required()     
    }).unknown()
}

const update = {
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().email(),
        password: Joi.string(),
        firstName: Joi.string(),
        lastName: Joi.string(),
    }).required().min(1)
}

module.exports = { userId, AccessTokenExists, update }