const express = require('express')
const auhtUseCase = require("../usercases/auth.usercase")

const router =express.Router()

//POST /auth/login
router.post('/login',async(request,response)=>{
    try {
        const { email,password } = request.body;
        const token = await auhtUseCase.login(email,password);
        response.json({
            success: true,
            data: { token },
            });
        } catch (error) {
            response.status(error.status || 500);
            response.json({
                error: error.message,
            });

    }
});

module.exports = router