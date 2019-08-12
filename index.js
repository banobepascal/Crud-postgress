const courses = require('./api/routes/courses');
const express = require('express');
const app = express();

app.use("/courses", courses);

app.use((req, res, next) => {
    res.status(200).json({
        message: "it works"
    });
});

module.exports = app;

