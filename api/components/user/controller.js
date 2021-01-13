const nanoid = require('nanoid')
const store = require('../../../store/dummy')

const TABLA = 'user'

module.exports = function (injectedStore) {
    let store = injectedStore
    if(!store) {
        store = require('../../../store/dummy')
    }
    
    function list() {
        return store.list(TABLA)
    }

    function get(id) {
        return store.get(TABLA, id)
    }

    function post(body) {
        const user = {
            name: body.name
        }
        if(user.id) {
            user.id = nanoid()
        } else {
            user.id = body.id
        }

        return store.upsert(user)
    }

    return {
        list,
        get,
        post
    }
}
