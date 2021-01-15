    module.exports = {
        api: {
            port: process.env.PORT || 3000,
        },
        jwt: {
            secret: process.env.secret || 'NotASecret'
        },
        mysql: {
            host: process.env.MYSQL_HOST || 'remotemysql.com',
            user: process.env.MYSQL_USER || 't2FjLYBmIc',
            password: process.env.MYSQL_PASS || 'ujYvKoBIRL',
            database: process.env.MYSQL_DB || 't2FjLYBmIc'
        }
    }