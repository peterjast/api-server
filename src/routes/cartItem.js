'use strict';

const express = require('express');

const cartItemSchema = require('../models/cartItem.js')

const CartItem = require('../models/data-collection-class.js');
const cartItem = new CartItem(cartItemSchema);

const router = express.Router();

// RESTful routes

router.get('/cartItem', getcartItem);
router.get('/cartItem/:id', getOnecartItem);
router.post('/cartItem', createcartItem);
router.put('/cartItem/:id', updatecartItem);
router.delete('/cartItem/:id', deletecartItem);

// RESTful route handlers

function getcartItem(req, res) {
  cartItem.read()
  .then(getAllcartItem => res.status(200).json(getAllcartItem))
  .catch(err => next(err));
}

function getOnecartItem(req, res) {
  const id = req.params.id;
  cartItem.read(id)
  .then(item => res.status(200).json(item))
  .catch(err => next(err));
}

function createcartItem(req, res) {
  let content = req.body;
  cartItem.create(content)
  .then(createdcartItem => res.status(201).json(createdcartItem))
  .catch(err => next(err));
}

function updatecartItem(req, res) {
  const id = req.params.id;
  let content = req.body;
  cartItem.update(id, content)
  .then(updatedcartItem => res.status(200).json(updatedcartItem))
  .catch(err => next(err));
}

function deletecartItem(req, res) {
  const id = req.params.id;
  cartItem.delete(id)
  .then(deletedcartItem => res.status(204).json(deletedcartItem))
  .catch(err => next(err));
}

module.exports = router;