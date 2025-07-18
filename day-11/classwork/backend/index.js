const os = require("os");
console.log(os.hostname());
console.log(os.cpus());
console.log(os.machine());
const http = require("http");
console.log(http);

const customer = require('./package.json');
console.log(customer.address)
const fs = require('fs');
const fs = require('fs');

fs.readFile('./package.json', 'utf-8', (err, jsonString) => {
    if (err) {
        console.log(err);
    } else {
        try {
            const data = JSON.parse(jsonString);  // Fixed this line
            console.log(data.address);
        } catch (err) {
            console.log('Error parsing JSON', err);
        }
    }
});

const fs = require('fs');
//read async
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
//read sync
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
//write async
  fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});
//write sync
fs.writeFileSync('example.txt', 'Hello, Node.js!');
//append
fs.appendFile('example.txt', '\nMore content', (err) => {
  if (err) throw err;
});
//delete a directory
fs.unlink('example.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});
//created a directory
fs.mkdir('newDir', (err) => {
  if (err) throw err;
  console.log('Directory created');
});
//read a directory
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log(files); // array of filenames
});
