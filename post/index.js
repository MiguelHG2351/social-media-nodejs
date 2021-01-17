const express = require('express')

const config = require('../config')
const post = require('./components/post/network')
const errors = require('../network/errors')

// aplication
const app = express()

// middlewares
app.use(express.json())

// Router

app.use('/post', post)

app.use(errors)

app.listen(config.post.port, () => {
    console.log(`Server on port ${config.post.port}`)
})
