const { Joi, Segments } = require('celebrate');

const id = {
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}

const create = {
    [Segments.BODY]: Joi.object().keys({
        message: Joi.string().required()
    })
}

const update = {
    [Segments.BODY]: Joi.object().keys({
        message: Joi.string().required()
    })
}

module.exports = { 
    id,
    update,
    create
}