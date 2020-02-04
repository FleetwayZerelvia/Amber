const Discord = require('discord.js')
const bot = new Discord.Client()
module.exports = 'game_act.js';

bot.on('ready', function() {
    console.log("Je suis connecté !")
})

bot.login('XXXXXXXX')

bot.on('message', (receivedMessage) => {
    if (receivedMessage.author == bot.user) { // Prevent bot from responding to its own messages
        return
    }

    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "multiply") {
        multiplyCommand(arguments, receivedMessage)
    } else if (primaryCommand == "presentation") {
        presCommand(arguments, receivedMessage)
    } else if (primaryCommand == "ping") {
        pingCommand(arguments, receivedMessage)
    } else if (primaryCommand == "time") {
        timeCommand(arguments, receivedMessage)
    } else if (primaryCommand == "youtube") {
        ytCommand(arguments, receivedMessage)
    } else {
        receivedMessage.channel.send("I don't understand the command. Try `!help` for the complete list of commands")
    }
}
