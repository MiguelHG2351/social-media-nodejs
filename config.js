module.exports = {
        api: {
            port: process.env.PORT || 3000,
        },
        remoteDB: process.env.REMOTE_DB || false,
        post: {
            port: process.env.POST_PORT || 3002
        },
        jwt: {
            secret: process.env.secret || 'NotASecret'
        },
        mysql: {
            host: process.env.MYSQL_HOST || '',
            user: process.env.MYSQL_USER || '',
            password: process.env.MYSQL_PASS || '',
            database: process.env.MYSQL_DB || ''
        },
        mysqlService: {
            host: process.env.MYSQL_SRV_HOST || 'localhost',
            port: process.env.MYSQL_SRV_PORT || 3001
        },
        cacheService: {
            host: process.env.REDIS_HOST || '',
            port: process.env.REDIS_PORT || '',
            password: process.env.PASS || ''
        }
    }