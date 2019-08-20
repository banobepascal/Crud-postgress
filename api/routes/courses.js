const Joi = require('joi');
const express = require('express');
const router = express.Router();
const pool = require('pg');
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.use(express.json());

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"}
];

router.get('/courses', (req, res) => {
    res.send(courses);
});

router.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    
    courses.push(course);
    res.send(course);

});

router.put('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("Course not found");

    const {error} = validateInput(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);

}); 

router.delete('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send("Course not found");

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

router.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("Course not found");
    res.send(course);
});

function validateInput(course) {
    const schema = {
        name: Joi.string().min(5).required()
    };

    return Joi.validate(course, schema);
};

module.exports = router;