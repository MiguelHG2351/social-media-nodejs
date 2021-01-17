const express = require('express')

const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

router.get('/', list)

// functions
function list(req, res, next) {
    Controller.list()
    .then(lista => response.success(req, res, lista, 200))
    .catch(next)
}

module.exports = router
