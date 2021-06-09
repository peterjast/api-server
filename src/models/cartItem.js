'use strict';

const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
  category: { type: String },
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  inventory: { type: Number },
  image: { type: String }
})

const cartItemModel = mongoose.model('cartItem', cartItemSchema);

module.exports = cartItemModel;