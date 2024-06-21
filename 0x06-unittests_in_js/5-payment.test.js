// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    spy.restore();
  });

  it('should log the correct total when called with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct total when called with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
