const createError = require("http-errors");
const kodersUsercase = require("../usercases/koders.usercase");


const jwt = require("../lib/jwt") //para verificar token

async function auth(request, response, next){
    try{
    const token = request.header.authorization; // lo que retorna es el token
    
    if (!token) {
        throw createError(401, "JWT is required"); // si no esta el token lo exige 
        }
//verificacion de token
    const payload = jwt.verify(token);

    const user = await kodersUsercase.getById(payload.id);//el usuario es obtenido es por el id y se asigna al token      
    request.user = user;//nos permite la autentificacion o el acceso al usuario
      
    next();  
    } catch (error) {
        response.status(401);
        response.json({
            success: false,
            error: error.message,
        });
    }
};
        
 
 
 module.exports = auth;


    
