const http = require('http');

http.createServer((req, res) =>{
    console.log('server work')
    res.end('goood')
}).listen(3000)
