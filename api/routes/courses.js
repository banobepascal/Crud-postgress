const Joi = require('joi');
const express = require('express');
const router = express.Router();

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

function validateInput(course) {
    const schema = {
        name: Joi.string().min(5).required()
    };

    return Joi.validate(course, schema);
};

module.exports = router;