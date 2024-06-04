const express = require('express');
const koderRouter = require("./routers/koders.router");

const app = express();
//middleware
app.use(express.json());

app.use("/koders", koderRouter);

app.get("/", (request, response) =>{
    response.json({
        message: "koders APIv1",
    });
});

module.exports = app;
