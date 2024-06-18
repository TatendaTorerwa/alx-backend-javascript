const express = require('express');
const fs = require('fs');
const countStudents = require('./3-read_file_async'); // Assuming 3-read_file_async.js is correctly implemented

const app = express();
const port = 1245;
const databasePath = process.argv[2]; // Database file path passed as argument

// Route for /
app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

// Route for /students
app.get('/students', (req, res) => {
  res.type('text/plain');
  res.send('This is the list of our students\n');

  // Call countStudents function from 3-read_file_async.js
  countStudents(databasePath)
    .then(() => {
      console.log('Done reading students data');
    })
    .catch((error) => {
      console.error('Error reading students data:', error.message);
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running and listening on http://localhost:${port}`);
});

module.exports = app;
