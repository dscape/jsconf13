var http = require('http')

http.createServer(function handle(req, res) {
  res.end('welcome to node.js\n')
}).listen(1337, '127.0.0.1')

console.log('Server running on 1337')

// curl localhost:1337