var fs = require('fs')
var uuid = (~~(Math.random() * 1e9)).toString(36)

fs.writeFile('some.tmp', uuid, function (err) {
  if (err) throw err
  fs.readFile('some.tmp', function (err, contents) {
    if (err) throw err
    console.log('contents are ' + contents + '. should be '+ uuid + '.')
  })
})