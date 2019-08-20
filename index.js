const courses = require('./api/routes/courses');
const person = require('./api/routes/person');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", courses);
app.use("/person", person);


module.exports = app;

