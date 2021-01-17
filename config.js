module.exports = {
        api: {
            port: process.env.PORT || 3000,
        },
        post: {
            port: process.env.POST_PORT || 3002
        },
        jwt: {
            secret: process.env.secret || 'NotASecret'
        },
        mysql: {
            host: process.env.MYSQL_HOST || 'remotemysql.com',
            user: process.env.MYSQL_USER || 't2FjLYBmIc',
            password: process.env.MYSQL_PASS || 'ujYvKoBIRL',
            database: process.env.MYSQL_DB || 't2FjLYBmIc'
        },
        mysqlService: {
            host: process.env.MYSQL_SRV_HOST || 'localhost',
            port: process.env.MYSQL_SRV_PORT || 3001
        }
    }