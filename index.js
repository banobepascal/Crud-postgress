const courses = require('./api/routes/courses');
const express = require('express');
const app = express();

app.use("/api", courses);


module.exports = app;

