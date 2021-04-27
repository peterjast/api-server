'use strict';

module.exports = (req, res, next) => {
  console.log('Request data:', req.method, req.path);
  next();
}