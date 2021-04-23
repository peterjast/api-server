'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('***LOGGER***', () => {

  it('should log request method and path on GET: /clothes', async() => {
    const consoleSpy = jest.spyOn(console, 'log');
    const response = await mockRequest.get('/clothes');
    expect(response.status).toBe(200); //status code
    expect(consoleSpy).toHaveBeenCalledWith('Request data:', 'GET', '/clothes');
  });

})