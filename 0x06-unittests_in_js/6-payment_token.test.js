const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        try {
          expect(res).to.deep.equal({ data: 'Successful response from the API' });
          done();
        } catch (error) {
          done(error); // Pass any caught errors to done callback
        }
      })
      .catch((error) => {
        done(error); // Ensure any unhandled promise rejections are caught
      });
  });
});
