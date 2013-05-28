var http = require('http')
var counter = 1

http.createServer(function handle(req, res) {
  res.end('welcome to node.js')
  while (counter) counter++
}).listen(1337, '127.0.0.1')

console.log('Server running on 1337')