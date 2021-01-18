const express = require('express')
const app = express()
const config = require('../config')

const router = require('./network')

app.use(express.json())

app.use('/', router)

app.listen(config.mysqlService.port, () => {
    console.log('server cache listen port', config.mysqlService.port)
})
