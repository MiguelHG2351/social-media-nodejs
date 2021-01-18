const { nanoid } = require('nanoid')
const auth = require('../auth')

const TABLA = 'user'

module.exports = function (injectedStore, injectedCache) {
    let store = injectedStore
    let cache = injectedCache
    if(!store) {
        store = require('../../../store/mysql')
    }
    if(!cache) {
        store = require('../../../store/mysql')
    }
    
    async function list() {
        let users = await cache.list(TABLA)
        if(!users) {
            console.log('No estaba en cache')
            users = await store.list(TABLA)
            cache.upsert(TABLA, users, false)
        } else {console.log('Nos traemos datos de cache')}

        return store.list(TABLA)
    }
    
    function follow(from, to) {
        return store.upsert(TABLA + '_follow', {
            user_from: from,
            user_to: to
        }, true)
    }

    async function following(user) {
        const join = {}
        join[TABLA] = 'user_to';
        const query = { user_from: user }

        return await store.query(TABLA+'_follow', query, join)
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
        follow,
        following
    }
}
