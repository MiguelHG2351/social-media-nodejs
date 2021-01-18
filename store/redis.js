const redis = require('redis')
const config = require('../config')

const client = redis.createClient({
    host: config.cacheService.host,
    port: config.cacheService.port,
    password: config.cacheService.password
})

function list(table) {
    return new Promise((resolve, reject) => {
        client.get(table, (err, data) => {
            if(err) return reject(err)
            let res = data || null
            if(data) {
                res = JSON.parse(data) 
            }
            resolve(res)
        })
    })
}

function get(table) {

}

async function upsert(table, data, isNew) {
    let key = table
    if(data && data.id && isNew) {
        key = data + '_' + data.id
    }

    client.setex(key, 30, JSON.stringify(data))
    return true
}

module.exports = {
    list,
    get,
    upsert
}
