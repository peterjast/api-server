'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('404:', () => {

  it('should respond with a 404 on bad route', async() => {
    return mockRequest.get('/bad-route').then(data => {
      expect(data.status).toBe(404);
    })
  });

  it('should respond with a 404 on bad method', async() => {
    return mockRequest.post('/clothes/1').then(data => {
      expect(data.status).toBe(404);
    })
  });

})