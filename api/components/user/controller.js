const { nanoid } = require('nanoid')
const auth = require('../auth')

const TABLA = 'user'

module.exports = function (injectedStore) {
    let store = injectedStore
    if(!store) {
        store = require('../../../store/mysql')
    }
    
    function list() {
        return store.list(TABLA)
    }
    
    function follow(from, to) {
        return store.upsert(TABLA + '_follow', {
            user_from: from,
            user_to: to
        }, true)
    }

    function get(id) {
        return store.get(TABLA, id)
    }

    async function post(body) {
        const user = {
            name: body.name,
            username: body.username,
        }
        if(body.id) {
            user.id = body.id
        } else {
            user.id = nanoid()
        }

        if(body.password || body.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password,
                isNew: body.isNew
            })
        }
        return store.upsert(TABLA, user, body.isNew)
    }


    return {
        list,
        get,
        post,
        follow
    }
}
