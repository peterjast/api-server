'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const MONGODB_URI = process.env.MONGODB_URI;

const options = { useNewUrlParser: true, useUnifiedTopology: true }; 
mongoose.connect(MONGODB_URI, options);

const logger = require('./middleware/logger.js');
const clothesRoutes = require('./routes/clothes.js');
const foodRoutes = require('./routes/food.js');

const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');

app.use(express.json());

app.use(logger);
app.use(clothesRoutes);
app.use(foodRoutes);

// these live at the bottom of your server
app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`server is up on ${port}`)
    })
  }
}
