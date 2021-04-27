'use strict';

const dotenv = require('dotenv');

const server = require('./src/server.js');

dotenv.config();
const PORT = process.env.PORT || 3000;

server.start(PORT);
