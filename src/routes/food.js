'use strict';

const express = require('express');
// const mongoose = require('mongoose');

const foodSchema = require('../models/food.js')

const Food = require('../models/data-collection-class.js');
const food = new Food(foodSchema);

const router = express.Router();

// RESTful routes

router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

// RESTful route handlers

function getFood(req, res) {
  food.read()
  .then(getAllFood => res.status(200).json(getAllFood))
  .catch(err => next(err));
}

function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  food.read(id)
  .then(oneFood => res.status(200).json(oneFood))
  .catch(err => next(err));
}

function createFood(req, res) {
  let content = req.body;
  food.create(content)
  .then(createdFood => res.status(201).json(createdFood))
  .catch(err => next(err));
}

function updateFood(req, res) {
  const id = req.params.id;
  let content = req.body;
  food.update(id, content)
  .then(updatedFood => res.status(200).json(updatedFood))
  .catch(err => next(err));
}

function deleteFood(req, res) {
  const id = req.params.id;
  food.delete(id)
  .then(deletedFood => res.status(204).json(deletedFood))
  .catch(err => next(err));
}

module.exports = router;