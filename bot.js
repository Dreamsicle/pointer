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
        if (message.member.hasPermission("BAN_MEMBERS")) {
            try {
                message.guild.member(message.mentions.users.first()).ban()
                message.channel.send("", {embed: {
                    title: 'Press F to pay respects.',
                    color: 0x930e67
                }})
            } catch (e) {
                if (e == "TypeError: Unable to get property 'ban' of undefined or null reference") {
                    message.channel.send("", {embed: {
                        title: 'That person doesn\'t exist!',
                        description: "Make sure you're mentioning them, e.g. `" + prefix + "ban @user#1337`.",
                        color: 0xc5283d
                    }})
                } else {
                    message.channel.send("", {embed: {
                        title: 'Something went wrong.',
                        description: 'Please check if I have the proper permissions! If that seems to be fine, here\'s the full error: \n' + e,
                        color: 0xc5283d
                    }})
                }
            }
        } else {
            message.channel.send("", {embed: {
                title: "Sorry, but you don't have permission to do this.",
                description: "Please check if you have permsission to ban members.",
                color: 0xc5283d
            }})
        }
    }

    if (message.content.substring(0,4) === 'kick') {
        message.content = message.content.substr(5) // remove 'kick' and the trailing space to just get the member to be kek'd
        if (message.member.hasPermission("KICK_MEMBERS")) {
            try {
                message.guild.member(message.mentions.users.first()).kick()
                message.channel.send("", {embed: {
                    title: 'Press F to pay respects.',
                    color: 0x930e67
                }})
            } catch (e) {
                if (e == "TypeError: Unable to get property 'kick' of undefined or null reference") {
                    message.channel.send("", {embed: {
                        title: 'That person doesn\'t exist!',
                        description: "Make sure you're mentioning them, e.g. `" + prefix + "kick @user#1337`.",
                        color: 0xc5283d
                    }})
                } else {
                    message.channel.send("", {embed: {
                        title: 'Something went wrong.',
                        description: 'Please check if I have the proper permissions! If that seems to be fine, here\'s the full error: \n' + e,
                        color: 0xc5283d
                    }})
                }
            }
        } else {
            message.channel.send("", {embed: {
                title: "Sorry, but you don't have permission to do this.",
                description: "Please check if you have permsission to ban members.",
                color: 0xc5283d
            }})
        }
    }

})
