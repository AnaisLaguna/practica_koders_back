const express = require("express")
const mentorUseCase = require("../usercases/mentors.usercase")
const routerm = express.Router();

// GET /mentor

routerm.get("/", async (request, response) => {
    try{
        const mentor = await mentorUseCase.getAll()
        response.json({
            succes: true,
            data:{
                mentor
            },
        })
    } catch (error){
        response.status(error.status || 500);
        response.json({
            succes: false,
            error: error.message,
        })
    }

})

// POST /mentor

routerm.post("/", async (request, response) =>{
    try{
        const mentorCreate = await mentorUseCase.createMentor(request.body);
        response.json({
            success: true,
            data: {
                mentor: mentorCreate
            }
        })
    }catch  (error){
        response.status(error.status || 500);
        response.json({
            succes: false,
            error: error.message,
        });
    }
});

// GET /mentor/:id

routerm.get("/:id", async (request, response) =>{
    try{
    const id = request.params.id;
    const mentor = await mentorUseCase.getByIdMentor(id);
    response.json({
        succes: true,
        data: {mentor}
    })
    }catch  (error){
        response.status(error.status || 500);
        response.json({
            succes: false,
            error: error.message,
        });
    }
});

// Delete By Id /mentor/:id
routerm.delete("/:id", async (request, response) =>{
    try{
        const { id } = request.params;
        const mentorDeleted = await mentorUseCase.deleteByIdMentor(id);

        response.json({
            succes: true,
            data: { mentor: mentorDeleted},
        })
    }catch(error){
        response.status(error.status || 500);
        response.json({
            succes: false,
            error: error.message,
        });
    }
});

// PATCH /mentor/:id
routerm.patch("/:id", async (request, response)=>{
    try{
        const {id} = request.params
        const mentorUpdated = await mentorUseCase.updateByIdMentor(id, request.body)
        response.json({
            success: true,
            data: {mentor: mentorUpdated}
        })
    }catch(error){
        response.status(error.status || 500);
        response.json({
            succes: false,
            error: error.message,
        });
    }

});
module.exports = routerm;