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

function helpCommand(arguments, receivedMessage) {
    if (arguments.length > 0) {
        receivedMessage.channel.send("Here's the help with the following topic: " + arguments)
    } else {
        receivedMessage.channel.send("Here is a list of the following commands: \n-!presentation \n-!help (Command list) \n\nCommands: \n-!Twitter \n-!Twitch \n-!Iam \n-!Iamnot \n-!Timezones \n-!8ball \n-!Weather \n-!Time \n-!Youtube \n-!Meow \n-!Yum \n-!Google \n-!Urbandict \n-!Define \n-!Wikipedia \n-!Wiki \n-!Pokemon \n-!Pokemonability \n-!Translate \n-!Autotranslang \n-!Ping \n-!Serverinfo \n-!Userinfo \n\nMod/Admin: \n-!Ban \n-!Kick \n-!Mute \n-!Purge \n-!Softban \n-!Unban \n-!Unmute \n-!Warn \n-!Warnpunish/Warnp (1 - Mute 10min, 2 - Mute 30min, 3 - 60min, 4 - Kick, 5 Temp.ban, 6 - Def.ban) \n-!Logserver \n-!Antiraid \n-!Reactionroles \n-!Asar \n-!Greet \n-!Bye \n-!Say? \n-!Streamadd \n-!Streamremove \n\nSplatoon: \n-!Rotation \n-!Profile \n-!Scrim (3/5/7/9) \n\nChat with bot: \n-!Give \n-!Tchat (Don't know yet) \n\nOwner: \n-!Leave \n-!Sleep \n-!Wakeup \n-!Setstatus \n-!Setavatar \n-!Setgame \n-!Setstream \n-!Listservers");
    }
}

function multiplyCommand(arguments, receivedMessage) {
    if (arguments.length < 2) {
        receivedMessage.channel.send("Not enough values to multiply. Try `!multiply 2 4 10` or `!multiply 5.2 7`")
        return
    }
    let product = 1
    arguments.forEach((value) => {
        product = product * parseFloat(value)
    })
    receivedMessage.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
}

function presCommand(arguments, receivedMessage) {
    receivedMessage.channel.send("Hello, my name is Amber, i'm a Discord bot created in JavaScript by Fleetway Mystefright Zerelvia#4508")
}

function pingCommand(arguments, receivedMessage) {
    receivedMessage.channel.send("Pong!")
}

function timeCommand(arguments, receivedMessage) {
    receivedMessage.channel.send()
}
