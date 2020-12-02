const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = (arguments, receivedMessage) => {
    receivedMessage.channel.send(`Pinging...`).then(m => {
        var ping = m.createdTimestamp - receivedMessage.createdTimestamp;
        var botPing = Math.round(bot.pi);

        m.edit(`**:ping_pong: Pong! Your Ping Is:-**\n  ${ping}ms`);
    });
}