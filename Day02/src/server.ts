import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { PORT, MESSAGE } from './serverConfig'
import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';
let port = PORT;
if (!PORT)
    port = 8080;
const server = express();

server.use(bodyParser.json())
server.use(cookieParser())

server.get('/hello', function (req, res) {
    if (!MESSAGE) {
        res.status(StatusCodes.NOT_FOUND).send('No Message Defined')
    } else {
        res.status(StatusCodes.OK).send(MESSAGE)
    }
})

server.get('/repeat-my-query', function (req, res) {
    if (!req.query.message) {
        res.status(StatusCodes.BAD_REQUEST).send('Bad Request')
    } else {
        res.status(StatusCodes.OK).send(req.query.message)
    }
})

server.get('/repeat-my-param/:message', function (req, res) {
    res.status(StatusCodes.OK).send(req.params.message)
})

server.post('/repeat-my-body', function (req, res) {
    if (!req.body.message) {
        res.status(StatusCodes.BAD_REQUEST).send('Bad Request')
    } else {
        res.status(StatusCodes.OK).send(req.body.message)
    }
})

server.get('/repeat-my-header', function (req, res) {
    if (!req.headers.message) {
        res.status(StatusCodes.BAD_REQUEST).send('Bad Request')
    } else {
        res.status(StatusCodes.OK).send(req.headers.message)
    }
})

server.get('/repeat-my-cookie', function (req, res) {
    if (!req.cookies.message) {
        res.status(StatusCodes.BAD_REQUEST).send('Bad Request')
    } else {
        res.status(StatusCodes.OK).send(req.cookies.message)
    }
})

server.get('/health', function (req, res) {
    res.status(StatusCodes.OK)
})

server.get('/repeat-all-my-queries', function (req, res) {
    let key = Object.keys(req.query);
    let value = Object.values(req.query);
    for (let i = 0; key[i] != undefined; i++) {
        res.status(StatusCodes.OK).send('"key": ' + key[i] + ',' + '\n"value": ' + value[i])
    }
})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})