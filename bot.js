console.log("Success!")
client.on('ready', () => {
    console.log('Ready.')
})

var runtime = require('./runtime/runtime.js')

client.on('message', message => {
    // handle prefix
    if (message.content.substring(0, prefix.length) !== prefix) { /* only process messages that have the prefix */
        return
    } else { /* if they do have it, */
        message.content = message.content.substr(prefix.length) /* remove the prefix from the message content (to keep the clutter of prefix + 'actual command' away) and carry on */
    }

    if (message.content === 'ping') {
        runtime.cmd.ping('arg')
    }
})
