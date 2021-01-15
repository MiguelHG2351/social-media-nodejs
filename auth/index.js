const jwt = require('jsonwebtoken')
const config = require('../config')
const error = require('../utils/error')

const secret = config.jwt.secret

function sign(data) {
    let dataString = JSON.stringify(data)
    let parserString = JSON.parse(dataString)
    return jwt.sign(parserString, secret)
}

const check = {
    own: function(req, owner) {
        const decode = decodeHeader(req)
        console.log(decode.id)
        console.log(owner)
        if(decode.id !== owner) {
            throw error('No puedes hacer esto', 401)
        }
    },
    logged: function(req) {
        const decode = decodeHeader(req)
    }
}

function getToken(auth) {
    if(!auth) {
        throw error('No vino el token', 401)
    }
    if(auth.indexOf('Bearer') === -1) {
        throw error('Format invalid :(', 401)
    }

    let token = auth.replace('Bearer ', '')
    return token
}

function verify(token) {
    return jwt.verify(token, secret)
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || ''
    const token = getToken(authorization)
    const decoded = verify(token)

    req.user = decoded

    return decoded
}

module.exports = {
    sign,
    check
}
