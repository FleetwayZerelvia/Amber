module.exports = connexion.js;

}

function pingCommand(arguments, receivedMessage) {
    receivedMessage.channel.send("Pong!")
}
