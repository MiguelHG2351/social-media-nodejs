const express = require('express')

const swaggerUI = require('swagger-ui-express')

const config = require('../config')
const user = require('./components/user/network')
const auth = require('./components/auth/network')

// aplication
const app = express()

// middlewares
app.use(express.json())

const swaggerDoc = require('./swagger.json')
// Router

app.use('/api/user', user)
app.use('/api/auth', auth)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

app.listen(config.api.port, () => {
    console.log(`Server on port ${config.api.port}`)
})
