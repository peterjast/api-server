'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('404:', () => {

  it('should respond with a 404 on bad route', async() => {
    const data = await mockRequest.get('/bad-route');
    console.log(data);
    expect(data.status).toBe(404);
  });

  it('should respond with a 404 on bad method', async() => {
    const data = await mockRequest.post('/clothes/1');
    console.log(data);
    expect(data.status).toBe(404);
  });

})