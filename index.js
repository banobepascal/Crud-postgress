const courses = require('./api/routes/courses');
const person = require('./api/routes/person');
const express = require('express');
const app = express();

app.use("/api", courses);
app.use("/person", person);


module.exports = app;

