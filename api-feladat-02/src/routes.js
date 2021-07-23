const express = require('express');
const data = require('../database/db.json');

const controller = express.Router();

controller.get('/', (req, res) => {
    res.json(data);
});

controller.get('/count', (req, res) => {
    const vaccinatedPersons = data.filter(person => person.vaccine);
    res.json(vaccinatedPersons.length);
});

controller.get('/vaccinated', (req, res) => {
    const vaccinatedPersons = data.filter(person => person.vaccine);
    res.json(vaccinatedPersons);
});


controller.get('/:id/vaccinated', (req, res) => {
    const vaccinatedPerson = data.find(person => person.id === parseInt(req.params.id, 10));
    vaccinatedPerson.vaccine ? res.json(true) : res.json(false);
});

controller.post('/', (req, res) => {
    const newPerson = req.body;
    newPerson.id = data[data.length - 1].id + 1;
    data.push(newPerson);
    res.status(201);
    res.json(newPerson);

});

controller.put('/:id/:vaccine', (req, res) => {
    const id = req.params.id;
    const vaccine = req.params.vaccine;
    const index = data.findIndex(person => person.id === Number(id));
    const { firstName, lastName } = data[index];

    data[index] = {
        id,
        firstName,
        lastName,
        vaccine
    };

    res.json(data[index]);
});

controller.delete('/:vaccine', (req, res) => {
    data.filter((person, index) => {
        if (person.vaccine === req.params.vaccine) {
            data.splice(index, 1);
        }
    });
    res.json(data);

});

module.exports = controller;