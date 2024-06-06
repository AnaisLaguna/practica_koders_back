const express = require("express");
const koderRouter = require("./routes/koders.router");
const mentorsRouter = require("./routes/mentors.router");
const authRouter = require("./routes/auth.router")
const generationRouter = require("./routes/generation.routers");

const app = express();

// Middleware
app.use(express.json());
app.use("/koders", koderRouter);
app.use("/mentors", mentorsRouter);
app.use("/auth", authRouter);
app.use("/generations", generationRouter);


app.get("/", (request, response) => {
    response.json({
        message: "Koder API v1"
    });
});

module.exports = app;