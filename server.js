const express = require('express')
const helmet = require('helmet')

const carsRouter = require('./routes/cars-router')
const salesRouter = require('./routes/sales-router')

const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', async (req, res) => {})

server.use('/api/cars', carsRouter)
server.use('/api/sales', salesRouter)

/**
 * Helpers
 */

function withCatch(promise) {
  return promise.then((data) => [null, data]).catch((err) => [err])
}

module.exports = server
