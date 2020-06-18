const secInfo = require('../sec-info')

module.exports = {
    port: 22,
    username: 'root',
    password: secInfo.password,
    host: secInfo.host,
    path: '/www/wwwroot/blog-dist/'
}