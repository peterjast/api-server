'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('***LOGGER***', () => {

  it('should log request method and path on GET: /product', async() => {
    const consoleSpy = await jest.spyOn(console, 'log');
    mockRequest.get('/product')
    .then(response => {
      expect(response.status).toBe(200); //status code
      expect(consoleSpy).toHaveBeenCalledWith('Request data:', 'GET', '/product');
    })
    .catch(err => console.log(err.message));
  });

})