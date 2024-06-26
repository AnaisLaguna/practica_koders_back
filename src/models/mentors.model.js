const mongoose = require('mongoose')
const modelNameMentors = 'Mentor';

const schema = new mongoose.Schema({
    firstName: { //reglas de ese atributo
       type: String,
       required: true,
       minLength: 2,
       maxLength: 100
    },
    lastName: {
       type: String,
       required: false,
       maxLength: 100
    },
    email: {
       type: String,
       required: true,
       match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ //patron a seguir
    },
    password: {
        type: String,
        requred: true
    },
    birthdate: {
       type: Date,
       require: true
    },
    // generation: {
    //    type: Number,
    //    min: 1,
    //    max: 100
    // },
    createdAt: { // fecha de creacion de documento
        type: Date,
        default: Date.now
    },
 });

module.exports = mongoose.model(modelNameMentors, schema);