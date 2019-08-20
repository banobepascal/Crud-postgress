const courses = require('./api/routes/courses');
const db = require('./api/routes/person');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", courses);
app.get("/people", db.getUsers);
app.get("/people/:id", db.getUserByID);
app.post("/people", db.createUser);
app.put("/people/:id", db.updateUser);
app.delete("/people/:id", db.deleteUser);


module.exports = app;

