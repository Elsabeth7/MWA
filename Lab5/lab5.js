const express = require('express');
const app = express();
const axios = require('axios');
app.set('x-power-by',false);
app.set('strict routing',true);
app.enable('trust proxy');
app.enable('case sensentive routing');

app.get('/users', async(req, res) => {
    try {
        const result = await axios.get('https://randomuser.me/api/?results=10');
        res.setHeader('Last-Modified', new Date());
        res.setHeader('Cache-Control', 'private, max-age=86400');
        res.setHeader('If-Modified-Since', new Date());
        res.setHeader('Link', '<http://localhost:7777/users?p=1> rel="first"');
        res.status(200);
        res.send(result.data.results);
        res.end()
    } catch (error) {
        console.log(error.stack);
        res.status(500).send({error: error.message});
    }
});

app.listen(7777);




