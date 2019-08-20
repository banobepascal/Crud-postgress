const courses = require('./api/routes/courses');
const db = require('./api/routes/person');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", courses);
app.get("/people", db.getUsers);
app.post("/people", db.createUser);


module.exports = app;

