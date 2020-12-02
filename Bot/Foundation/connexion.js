const Discord = require('discord.js');
const bot = new Discord.Client();
const processCommand = require('../Commands/controler');

bot.on('ready', function() {
    console.log("Je suis connecté !");
});

bot.login('NDI0NjUzNDQ1OTc5NTcwMTc4.Wq1vVw.wuG-CdOZ9gqCh6tuekjAzOhooFk');

bot.on('message', (receivedMessage) => {
    if (receivedMessage.author == bot.user) { // Prevent bot from responding to its own messages
        return;
    }

    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage);
    }
});