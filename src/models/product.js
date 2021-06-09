'use strict';

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  category: { type: String },
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  inventory: { type: Number },
  image: { type: String }
})

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;