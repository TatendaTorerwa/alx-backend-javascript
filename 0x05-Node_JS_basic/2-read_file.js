const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = {};
    let totalStudents = 0;

    lines.forEach((line) => {
      if (line.trim()) { // Ignore empty lines
        const [firstname, lastname, age, field] = line.split(',');
        if (field) {
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
          totalStudents++;
        }
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const field in students) {
      if (Object.hasOwnProperty.call(students, field)) {
        const fieldStudents = students[field];
        console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
