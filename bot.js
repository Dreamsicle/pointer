console.log("Success!")
client.on('ready', () => {
    console.log('Ready.')
})

client.on('message', message => {
    // handle prefix
    if (message.content.substring(0, prefix.length) !== prefix) { /* only process messages that have the prefix */
        return
    } else { /* if they do have it, */
        message.content = message.content.substr(prefix.length) /* remove the prefix from the message content (to keep the clutter of prefix + 'actual command' away) and carry on */
    }

    if (message.content === 'ping') {
        message.channel.send("", {embed: {
            title: 'Pong!',
            color: 0x930e67
        }})
    }

    if (message.content.substring(0,3) === 'ban') {
        message.content = message.content.substr(4) // remove 'ban' and the trailing space to just get the member to be beaned
        if (message.author.hasPermission("BAN_MEMBERS")) {
            console.log("ayy")
        }
        message.channel.send("", {embed: {
            title: 'Press F to pay respects.',
            color: 0x930e67
        }})
    }

})
