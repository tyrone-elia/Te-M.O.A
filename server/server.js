const express = require('express')
const path = require('path')

const tourRoutes = require('./routes/tours')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/tours', tourRoutes)

module.exports = server
