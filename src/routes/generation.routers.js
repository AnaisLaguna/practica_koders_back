const express = require('express');
const generationUsercase = require ('../usercases/generation.usercase');
const auth = require('../middlewares/auth.middleware');

const router = express.Router()

// GET /

router.get("/", auth, async (request, response) => {
    try {
        const generations = await generationUsercase.getAllGenerations();
        response.json({
            success: true,
            message: `Escribe la generacion`,
            data: { 
                generations
            }
        })
        } catch (error) {
            response.status(error.status || 500)
            response.json({
                success: false,
                error: error.message
            });
        }
});

// GET /:id

router.get("/:id", auth, async (request, response) => {
    try{
        const {id} = request.params;
       const generation = await generationUsercase.getByIdGeneration(id);
        response.json({
            success: true,
            message: `Generación encontrada`,
            data: { generation },
    })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            message: 'Error al obtener generación con el id',
            error: error.message,
        });
    }
});

//POST /

router.post("/", auth, async (request, response) => {
    try {
     const generationCreated = await generationUsercase.createGeneration(request.body);
     response.json({
        success: true,
        message: `Generación creada con éxito`,
        data: { generation: generationCreated }
    })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            message: 'Error al crear generación',
            error: error.message,
        });
    }    
});

// Delete By Id /koders/:id
router.delete("/:id", auth, async (request, response) => {
    try {
        const  id  = request.params;
        const generationDelete = await generationUsercase.deleteByIdGeneration(id);
        response.json({
            success: true,
            message: `Generación eliminada con éxito`,
            data:{ generations: generationDelete}
        })
    }catch(error){
        response.status(error.status || 500);
        response.json({
            success: false,
            message: 'Error al eliminar generación con el id',
            error: error.message,
        });
    }
});

// PATCH /koders/:id
router.patch("/:id", auth, async (request, response) => {
    try {
        const id  = request.params;
        const generationUpdate = await generationUsercase.updateByIdGeneration(id, request.body);
        response.json({
            success: true,
            message: `Generación actualizada con éxito`,
            data: { generation: generationUpdate }
        })
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            message: 'Error al actualizar generación',
            error: error.message,
        });
    }
});

module.exports = router;