const express = require('express')

const config = require('../config')
const user = require('./components/user/network')

// aplication
const app = express()

// middlewares
app.use(express.json())

// Router

app.use('/api/user', user)

app.listen(config.api.port, () => {
    console.log(`Server on port ${config.api.port}`)
})
