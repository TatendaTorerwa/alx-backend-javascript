// api.test.js
const request = require('supertest');
const app = require('./api');
const { expect } = require('chai');

describe('API Tests', () => {
  describe('Index Page GET /', () => {
    it('should return status 200', async () => {
      const response = await request(app).get('/');
      expect(response.status).to.equal(200);
    });

    it('should return the message "Welcome to the payment system"', async () => {
      const response = await request(app).get('/');
      expect(response.text).to.equal('Welcome to the payment system');
    });

    it('should not return an incorrect message', async () => {
      const response = await request(app).get('/');
      expect(response.text).to.not.equal('Some incorrect message');
    });
  });

});

