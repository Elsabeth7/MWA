const fs = require('fs');
const path = require('path');

const fileName = process.argv[process.argv.length - 1];

const filePath = path.join(__dirname, fileName);
console.log(filePath);
fs.createReadStream(filePath, { encoding: 'utf8'})
    .on('data', (chunk) => {
        process.send(chunk);
    })
    .on('end', () => {
        process.send('end');
    });