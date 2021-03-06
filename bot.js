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


    // function time

    // create function to handle sending messages to avoid code clutter
    function sendMessage(embedTitle, embedDescription, messageType) {
        // messageType will probably be used for more than just color soon maybe
        if (messageType == undefined) {
            var embedColor = 0x930e67
        }
        if (messageType == 'normal') {
            var embedColor = 0x930e67
        }
        if (messageType == 'error') {
            var embedColor = 0xc5283d
        }
        message.channel.send("", {embed: {
            title: embedTitle,
            description: embedDescription,
            color: embedColor
        }})
    }


    if (message.content === 'ping') {
        sendMessage("Pong!", "I've recieved and can respond to your message.", 'normal')
    }

    if (message.content.substring(0,3) === 'ban') {
        message.content = message.content.substr(4) // remove 'ban' and the trailing space to just get the member to be beaned
        if (message.member.hasPermission("BAN_MEMBERS")) {
            try {
                message.guild.member(message.mentions.users.first()).ban()
                sendMessage("Press F to pay respects.", "I've banned " + message.mentions.users.first() + ".", "normal")
            } catch (e) {
                if (e == "TypeError: Unable to get property 'ban' of undefined or null reference") {
                    sendMessage("That person doesn't exist!", "Make sure you're mentioning them, e.g. `" + prefix + "ban @user#1337`.", 'error')
                } else {
                    sendMessage("Something went wrong.", "Please check if I have the proper permissions! If that seems to be fine, here's the full error: " + '\n```javascript' + e + '\n```', 'error')
                }
            }
        } else {
            sendMessage("Sorry, but you don't have permission to do this.", "Please check if you have permsission to ban members.", 'error')
        }
    }

    if (message.content.substring(0,4) === 'kick') {
        message.content = message.content.substr(5) // remove 'kick' and the trailing space to just get the member to be kek'd
        if (message.member.hasPermission("KICK_MEMBERS") || message.author == message.mentions.users.first()) {
            try {
                message.guild.member(message.mentions.users.first()).kick()
                sendMessage("Press F to pay respects.", "I've kicked " + message.mentions.users.first() + ".", "normal")
            } catch (e) {
                if (e == "TypeError: Unable to get property 'kick' of undefined or null reference") {
                    sendMessage("That person doesn't exist!", "Make sure you're mentioning them, e.g. `" + prefix + "kick @user#1337`.", 'error')
                } else {
                    sendMessage("Something went wrong.", "Please check if I have the proper permissions! If that seems to be fine, here's the full error: " + '\n```javascript' + e + '\n```', 'error')
                }
            }
        } else {
            sendMessage("Sorry, but you don't have permission to do this.", "Please check if you have permsission to kick members.", 'error')
        }
    }

})
