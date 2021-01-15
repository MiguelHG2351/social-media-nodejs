const jwt = require('jsonwebtoken')
const config = require('../config')

const secret = config.jwt.secret

function sign(data) {
    return jwt.sign(data, secret)
}

const check = {
    own: function(req, owner) {
        const decode = decodeHeader(req)
        console.log(decode.id)
        console.log(owner)
        if(decode.id !== owner) {
            throw new Error('No puedes hacer esto')
        }
    }
}

function getToken(auth) {
    if(!auth) {
        throw new Error('No vino el token')
    }
    if(auth.indexOf('Bearer') === -1) {
        throw new Error('Format invalid :(')
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
