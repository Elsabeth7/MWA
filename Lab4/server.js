const { Subject } = require('rxjs');
const subject = new Subject();
const http = require('http');
const { fork } = require('child_process');
const url = require('url');
const queryString = require('querystring');

http.createServer(function(req, res) {
    subject.next({ req, res });
})
.listen(7000);//  while running ...http://localhost:3000/?file=file

subject.subscribe(function({ req, res }) {

    const urlData = url.parse(req.url);
    const { file } = queryString.parse(urlData.query);

    
    if(file) {
        const childProcess = fork('read-file.js', [file.toString()]);
        childProcess.send('start');
        childProcess.on('message', function(msg) {
            if(msg === 'end') res.end();
            else {
                res.write(msg, 'utf8');
            }
        });
     } else {
       res.end();
     }

});