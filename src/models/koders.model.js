const mongoose = require('mongoose') //se encarga de crear y mostrar objetos en base de datos 


const modelName = 'koders'
const schema = new mongoose.Schema({
     //reglas del atributo
   firstName: {
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
       match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ //patron a seguir para el email
    },
    password: {
        type: String,
        requred: true
    },
    birthdate: {
       type: Date,
       require: true
    },
     generation: {
      type: mongoose.Schema.Types.ObjectId, // toma id del documento de la base de datos de generacion 
      ref: "generations", // hace referencia al modelo
     },
    
    createdAt: { // fecha de creacion de documento
        type: Date,
        default: Date.now
    },
 });

module.exports = mongoose.model(modelName, schema);