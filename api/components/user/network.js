const express = require('express')

const secure = require('./secure')
const response = require('../../../network/response')
const Controller = require('./index')

const router = express.Router()

router.get('/', list)

router.post('/follow/:id', secure('follow'),follow)

router.get('/:id', get)

router.post('/', post)

router.put('/', secure('update'),post)

function list(req, res, next) {
    Controller.list()
    .then(lista => response.success(req, res, lista, 200))
    .catch(next)
}

function follow(req, res, next) {
    Controller.follow(req.user.id, req.params.id)
    .then(data => {
        response.success(req, res, data, 200)
    })
    .catch(next)
}

function get(req, res, next) {
    Controller.get(req.params.id)
    .then(user => response.success(req, res, user, 200))
    .catch(next)
}

function post(req, res, next) {
    Controller.post(req.body)
    .then(user => response.success(req, res, user, 200))
    .catch(next)
}

module.exports = router
