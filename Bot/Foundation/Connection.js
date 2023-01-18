const Discord = require('discord.js');
const bot = new Discord.Client();
const processCommand = require('./Index');

bot.on('ready', function() {
    console.log("I am online and ready to help !");
});

bot.login('xxxxxx');

bot.on('message', (receivedMessage) => {
    if (receivedMessage.author == bot.user) { // Prevent bot from responding to its own messages
        return;
    }

    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage);
    }
});