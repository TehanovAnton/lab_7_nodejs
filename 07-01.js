const http = require('http')
const RequestHandler = require('./m07-01')
let homepath = './static'

server = http.createServer((req, res) => {
    RequestHandler(req, res, homepath)
})
server.listen(5000, () => console.log('Server running => http://localhost:5000'))