'use strict';

const express = require('express');
// const mongoose = require('mongoose');

const productSchema = require('../models/product.js')

const Product = require('../models/data-collection-class.js');
const product = new Product(productSchema);

const router = express.Router();

// RESTful routes

router.get('/product', getproduct);
router.get('/product/:id', getOneproduct);
router.post('/product', createproduct);
router.put('/product/:id', updateproduct);
router.delete('/product/:id', deleteproduct);

// RESTful route handlers

function getproduct(req, res) {
  product.read()
  .then(getAllproduct => res.status(200).json(getAllproduct))
  .catch(err => next(err));
}

function getOneproduct(req, res) {
  const id = parseInt(req.params.id);
  product.read(id)
  .then(oneproduct => res.status(200).json(oneproduct))
  .catch(err => next(err));
}

function createproduct(req, res) {
  let content = req.body;
  product.create(content)
  .then(createdproduct => res.status(201).json(createdproduct))
  .catch(err => next(err));
}

function updateproduct(req, res) {
  const id = req.params.id;
  let content = req.body;
  product.update(id, content)
  .then(updatedproduct => res.status(200).json(updatedproduct))
  .catch(err => next(err));
}

function deleteproduct(req, res) {
  const id = req.params.id;
  product.delete(id)
  .then(deletedproduct => res.status(204).json(deletedproduct))
  .catch(err => next(err));
}

module.exports = router;