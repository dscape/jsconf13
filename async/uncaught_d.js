var http = require('http')
var domain = require('domain')

http.createServer(function handle(req, res) {
  var d = domain.create()
  d.add(req)
  d.add(res)
  d.on('error', function(err) { res.end(err.message) })
  d.run(function() {
    if(Math.random()>0.5) throw new Error('error: foo bar')
    res.end('ok: welcome to node.js')
  })
}).listen(1337, '127.0.0.1')

console.log('Server running on 1337')