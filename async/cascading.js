var fs = require('fs')
var async = require('async')
var uuid = (~~(Math.random() * 1e9)).toString(36)

function print_contents(err, results) {
  if (err) throw err
  console.log('contents are ' + results[1] +
    '. should be '+ uuid + '.')
}

function write_file(callback){
  fs.writeFile('some.tmp', uuid, callback)
}

function read_file(callback){
  fs.readFile('some.tmp', callback)
}

async.series([write_file, read_file], print_contents)