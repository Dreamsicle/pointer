console.log('Getting updates..')

require('simple-git')(__dirname)
     .pull()
var npm = require('npm')
npm.load(function(err) {
    npm.commands.update([], function(er, data) {
    })

    npm.on('log', function(message) {
        console.log(message)
    })
})

var fs = require('fs'),
    filename = "./package-lock.json",
    tempFile = fs.openSync(filename, 'r')

fs.closeSync(tempFile);

fs.unlinkSync(filename);