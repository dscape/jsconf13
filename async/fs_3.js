var fs = require('fs')
var uuid = (~~(Math.random() * 1e9)).toString(36)

fs.writeFile('some.tmp', uuid, function (err) {})