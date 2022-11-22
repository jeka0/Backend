const EntitySchema = require('typeorm').EntitySchema
module.exports = new EntitySchema({
    name: "Post",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true 
        },
        message: {
            type: "text",
            nullable: true
        },
        userId: {
            type: "int"
        },
        datetime: {
            type: "date"
        },
    },
})