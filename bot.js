console.log("Success!")
client.on('ready', () => {
    console.log('Ready.')
})

client.on('message', message => {
    // handle prefix
    if (message.content.substring(0, prefix.length) !== prefix) { /* if the first two characters aren't 'g/', just ignore it */
        return
    } else { /* if they are, */
        message.content = message.content.substr(prefix.length) /* remove them (to keep the clutter of prefix + 'actual command' away) and carry on */
    }

    if (message.content === 'ping') {
        message.channel.send("", {embed: {
            title: 'Pong!',
            color: 16706817
        }})
    }
})
