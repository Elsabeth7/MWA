//solution for question # 3 group assignment 
const http = require('http');
const server = http.createServer();

const fs = require('fs');
const path = require('path');

const {promisify} = require('util');
const readFile = promisify(fs.readFile); //Asynch...Promise
server.listen(7777); //listens to port 7777
//a. using readFileSync

server.on('request',function(req, res){
    const buffer = fs.readFileSync(path.join(__dirname,'bigFile.mkv'));
    res.write(buffer);
    res.end();
});


//b. using readFile solution
server.on('request',function(req, res){
    const buffer = await readFile(path.join(__dirname,'bigFile.mkv'));
    res.write(buffer);
    res.end();
});

//c. using streams
server.on('request',function(req, res){
 fs.createReadStream('bigFile.mkv').pipe(res);
     
});
