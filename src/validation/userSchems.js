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

module.exports = { userId, AccessTokenExists }