'use strict';

const express = require('express');

const clothesSchema = require('../models/clothes.js')

const Clothes = require('../models/data-collection-class.js');
const clothes = new Clothes(clothesSchema);

const router = express.Router();

// RESTful routes

router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

// RESTful route handlers

function getClothes(req, res) {
  clothes.read()
  .then(getAllClothes => res.status(200).json(getAllClothes))
  .catch(err => next(err));
}

function getOneClothes(req, res) {
  const id = req.params.id;
  clothes.read(id)
  .then(clothing => res.status(200).json(clothing))
  .catch(err => next(err));
}

function createClothes(req, res) {
  let content = req.body;
  clothes.create(content)
  .then(createdClothes => res.status(201).json(createdClothes))
  .catch(err => next(err));
}

function updateClothes(req, res) {
  const id = req.params.id;
  let content = req.body;
  clothes.update(id, content)
  .then(updatedClothes => res.status(200).json(updatedClothes))
  .catch(err => next(err));
}

function deleteClothes(req, res) {
  const id = req.params.id;
  clothes.delete(id)
  .then(deletedClothes => res.status(204).json(deletedClothes))
  .catch(err => next(err));
}

module.exports = router;