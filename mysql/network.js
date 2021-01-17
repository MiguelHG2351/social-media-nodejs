const express = require('express')

const response = require('../network/response')
const store = require('../store/mysql')

const router = express.Router()

router.get('/:table', list)
router.get('/:table/:id', get)
router.post('/:table', insert)
router.put('/:table', upsert)

async function list(req, res, next) {
    const datos = await store.list(req.params.table)
    response.success(req, res, datos, 200)
}

async function get() {
    const datos = await store.get(req.params.table, req.params.table)
    response.success(req, res, datos, 200)
}

async function insert() {
    const datos = await store.upsert(req.params.table, req.body, true)
    response.success(req, res, datos, 200)
}

async function upsert() {
    const datos = await store.upsert(req.params.table, false)
    response.success(req, res, datos, 200)
}

module.exports = router

