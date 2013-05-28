var http = require('http')

http.createServer(function handle(req, res) {
  if(Math.random()>0.5) throw new Error('foo bar')
  res.end('welcome to node.js')
}).listen(1337, '127.0.0.1')

console.log('Server running on 1337')