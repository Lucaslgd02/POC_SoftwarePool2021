import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
const port = 8080;
const server = express();

server.get('/hello', function (req, res) {
    res.send('world')
})

server.get('/repeat-my-query', function (req, res) {
    if (!req.query.message) {
        res.status(400).send('Bad Request')
    } else {
        res.status(200).send(req.query.message)
    }
})

server.get('/repeat-my-param/:message', function (req, res) {
    res.status(200).send(req.params.message)
})

server.post('/repeat-my-body', function (req, res) {
    if (!req.body.message) {
        res.status(400).send('Bad Request')
    } else {
        res.status(200).send(req.body.message)
    }
})

server.get('/repeat-my-header', function (req, res) {
    if (!req.headers.message) {
        res.status(400).send('Bad Request')
    } else {
        res.status(200).send(req.headers.message)
    }
})

server.get('/repeat-my-cookie', function (req, res) {
    if (!req.cookies.message) {
        res.status(400).send('Bad Request')
    } else {
        res.status(200).send(req.cookies.message)
    }
})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})