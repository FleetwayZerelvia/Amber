const Discord = require('discord.js');

const EmbedAmber = new Discord.MessageEmbed()
    .setTitle('General Commands')
    .attachFiles(['../assets/discordjs.png'])
    .setImage('attachment://discordjs.png')

module.exports = (arguments, receivedMessage) => {
    if (arguments.length > 0) {
        receivedMessage.channel.send("Here's the help with the following topic: " + arguments)
    } else {
        receivedMessage.channel.send("Here is a list of the following commands: \n-!presentation \n-!help (Command list) \n\nCommands: \n-!Twitter \n-!Twitch \n-!Iam \n-!Iamnot \n-!Timezones \n-!8ball \n-!Weather \n-!Time \n-!Youtube \n-!Meow \n-!Yum \n-!Google \n-!Urbandict \n-!Define \n-!Wikipedia \n-!Wiki \n-!Pokemon \n-!Pokemonability \n-!Translate \n-!Autotranslang \n-!Ping \n-!Serverinfo \n-!Userinfo");
    }
}

channel.send(EmbedAmber)
