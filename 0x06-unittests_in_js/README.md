
### 0x06. Unittests in JS Project README

```markdown
# 0x06. Unittests in JS

This project is aimed at understanding and applying unit testing in JavaScript using Mocha, Chai, and Sinon. The objective is to write efficient test suites to ensure the correctness of functions and integration of different modules.

## Learning Objectives

- Use Mocha to write test suites.
- Employ different assertion libraries (Node or Chai).
- Present and organize long test suites.
- Utilize spies and stubs with Sinon.
- Understand and implement hooks.
- Perform unit testing with async functions.
- Write integration tests for a small Node server.

## Resources

- **Documentation**:
  - Mocha
  - Chai
  - Sinon
  - Express
  - Request
- **Tutorials**:
  - How to Test NodeJS Apps using Mocha, Chai and SinonJS

## Requirements

- Node 12.x.x on Ubuntu 18.04.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- Include a `README.md` file at the root of the project folder.
- Use `.js` extension for all JavaScript files.
- All tests should pass without any warnings or errors when running `npm test *.test.js`.

## Tasks

### 0. Basic test with Mocha and Node assertion library

- **Objective**: Install Mocha and set up a script to run tests using `npm test`.
- **Function**: `calculateNumber(a, b)` - Rounds `a` and `b` and returns their sum.
- **Tests**: Create `0-calcul.test.js` to test the function using Node's `assert`.

### 1. Combining descriptions

- **Objective**: Upgrade the previous function to handle different operations (`SUM`, `SUBTRACT`, `DIVIDE`).
- **Function**: `calculateNumber(type, a, b)` - Perform the specified operation after rounding `a` and `b`.
- **Tests**: Create `1-calcul.test.js` using `describe` to organize test cases.

### 2. Basic test using Chai assertion library

- **Objective**: Rewrite the test suite using Chai's `expect`.
- **Files**: `2-calcul_chai.js`, `2-calcul_chai.test.js`.

### 3. Spies

- **Objective**: Use Sinon to create a spy and verify function calls.
- **Files**: `utils.js`, `3-payment.js`, `3-payment.test.js`.

### 4. Stubs

- **Objective**: Use Sinon to create stubs and control function behavior.
- **Files**: `4-payment.js`, `4-payment.test.js`.

### 5. Hooks

- **Objective**: Implement hooks (`beforeEach`, `afterEach`) to set up and clean up tests.
- **Files**: `5-payment.js`, `5-payment.test.js`.

### 6. Async tests with done

- **Objective**: Write async tests using the `done` callback.
- **Files**: `6-payment_token.js`, `6-payment_token.test.js`.

### 7. Skip

- **Objective**: Use Mocha's `skip` to bypass a failing test.
- **File**: `7-skip.test.js`.

### 8. Basic Integration testing

- **Objective**: Write integration tests for an Express server.
- **Files**: `8-api/api.js`, `8-api/api.test.js`.

### 9. Regex integration testing

- **Objective**: Add and test an endpoint with regex validation.
- **Files**: `9-api/api.js`, `9-api/api.test.js`.

### 10. Deep equality & Post integration testing

- **Objective**: Add and test new endpoints for `GET /available_payments` and `POST /login`.
- **Files**: `10-api/api.js`, `10-api/api.test.js`.

## Repository

- **GitHub repository**: `alx-backend-javascript`
- **Directory**: `0x06-unittests_in_js`
- **Files**: As specified in the tasks.


