const express = require('express');
const data = require('../database/db.json');

const controller = express.Router();

controller.get('/count', (req, res) => {
    const vaccinatedPersons = data.filter(person => person.vaccine);
    res.json(vaccinatedPersons.length);
});

controller.get('/vaccinated', (req, res) => {
    const vaccinatedPersons = data.filter(person => person.vaccine);
    res.json(vaccinatedPersons);
});

module.exports = controller;