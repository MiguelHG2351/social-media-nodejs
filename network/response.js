exports.success = function (req, res, msg, status) {
    let stautsCode = status || 200
    let stautsMessage = msg || ''

    res.status(status).send({
        error: false,
        status: stautsCode,
        body: stautsMessage
    })
}

exports.error = function (req, res, msg, status) {
    let stautsCode = status || 500
    let stautsMessage = msg || ''

    res.status(status).send({
        error: true,
        status: stautsCode,
        body: stautsMessage
    })
}
