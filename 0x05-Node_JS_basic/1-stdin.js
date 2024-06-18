process.stdin.setEncoding('utf-8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  if (data !== null) {
    const input = data.toString().trim();
    process.stdout.write(`Your name is:${input}\n`);
  } else {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});
