'use strict';

const express = require('express');
const app = express();

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
  start: (port) => {
    app.listen(port, console.log(`Server is up and running on port: ${port}`));
  },
};
