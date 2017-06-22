console.log('Getting updates..')

// git pull
require('simple-git')(__dirname)
     .pull()

// update modules
var npm = require('npm')
npm.load(function(err) {
    npm.commands.update([], function(er, data) {
    })

    npm.on('log', function(message) {
        console.log(message)
    })
})

// delete lock file created by npm
console.log('Cleaning up...')
try {
var fs = require('fs'),
    lockFile = "./package-lock.json",
    stopFunkFile = fs.openSync(lockFile, 'r')

fs.closeSync(stopFunkFile)
fs.unlinkSync(lockFile)
} catch (e) {
    console.log('Nothing to clean up.')
}
console.log('Defining global variables...')
global.Discord = require("discord.js")
global.client = new Discord.Client()

console.log('Initializing config...')
try {
    global.config = JSON.parse(fs.readFileSync('./config.json'))
    global.prefix = config.prefix
} catch (e) {
    console.log("We couldn't find your configuration. Please make sure that you've copied the config.json.example to config.json")
    console.log("Here's the exact error:")
    console.log(e)
    console.log("Stopping...")
    process.exit()
}

console.log("Bootstrap complete.")
console.log("Starting up...")