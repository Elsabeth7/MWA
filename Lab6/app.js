//dependency
const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const helmet = require('helmet')

//init
const app = express()
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
const grade_array = [
    { id: 1, name: 'Elsabeth Melaku', course: 'MWA', grade: 'A+' },
    { id: 2, name: 'Fnan Amanuel', course: 'MWA', grade: 'A+' },
    { id: 3, name: 'Biruk Fikre', course: 'MWA', grade: 'A+' },
    { id: 3, name: 'Dawit Fikre', course: 'MWA', grade: 'A+' }
]

//setup
app.use(express.json()); //Parse JSON bodies
app.use(morgan('combined', { stream: accessLogStream }))
app.use(cors())
app.use(helmet())

//middleware
app.post('*', function (req, resp, next) {
    console.log(req.body)
    try {
        if (Object.keys(req.body).length === 0)
            throw new Error('Invalid data from user.');
    } catch (e) {
        return next(400)
    }
    return next()
})
  
//routing
    //getting single value 
app.get('/grades/:id', (req, resp) => {
    resp.status(200).send(grade_array.find(x => x.id === parseInt(req.params.id)))
    resp.end()
})

app.get('/grades', (req, resp) => {
    resp.status(200).send(grade_array)
    resp.end()
})

app.post('/grades', (req, resp) => {
    const grade = req.body;
    grade.id = grade_array.length + 1;
    grade_array.push(grade);
    resp.status(200).send(grade)
    resp.end()
})

app.delete('/grades', (req, resp) => {
    resp.remove(req.body.id);
    res.json(req.body).status(200);
    resp.end()
})

//error handling 
app.use(function (err, req, resp, next) {
    if (err === 400)
        resp.status(400).send('Bad Request.')
    else
        resp.status(500).send('Internal Server Error.')
})

//boot
app.listen(7777, () => console.log('Listening at 7777'))