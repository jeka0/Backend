const EntitySchema = require('typeorm').EntitySchema
module.exports = new EntitySchema({
    name: "User", // Will use table name `post` as default behaviour.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true 
        },
        firstName: {
            type: "text",
        },
        lastName: {
            type: "text",
        },
        email: {
            type: "text",
            unique: true
        },
        password: {
            type: "text",
        },
    },
})