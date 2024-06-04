const express = require("express");
const koderUsercase = require("../usercases/koders.usercase");

const router = express.Router();


//GET  / Koders

router.get("/", async (request, response) => {
    try {
        const koders = await koderUsercase.getAll();

        response.json({
            success: true,
            data: {koders} ,
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            message: error.message,
        });
    }
});

//POST /Koders

router.post("/", async (request, response) => {
    try {
        const koderCreated = await koderUsercase.create(request.body);

        response.json({
            success: true,
            data: { koder: koderCreated },
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            message: error.message,
        });
    }
});

//GET  /koders/:id
router.get('/:id', async (reuqest, response) => {
    try {
        const id = reuqest.params.id;
        const koder = await koderUsercase.getById(id);

        response.json({
            success: true,
            data: { koder },
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,
        });
    }
});

//DELETE /koders/:id
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const koderDeleted = await koderUsercase.deleteById(id);

        response.json({
            success: true,
            data: { koder: koderDeleted },
        });

    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false,
            error: error.message,
        });
    }
});

//PATCH /koders/:id
router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const koderUpdated = await koderUsercase.updateById(id, request.body);
        
        response.json({
            success: true,
            data: { koder: koderUpdated },
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            error: error.message,  
        });
    }
});


module.exports = router;