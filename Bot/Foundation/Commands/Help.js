const Discord = require('discord.js');

const EmbedAmber = new Discord.MessageEmbed()

module.exports = (arguments, receivedMessage) => {
    if (arguments, receivedMessage) {
        EmbedAmber.setColor('#c73915')
            .setTitle('General Comands')
            .setAuthor('Available commands')
            .setDescription('You will find the public commands that i can offer for everyone')
            .setThumbnail('https://i.imgur.com/IJQSF1Q.jpg')
            .addFields({
                name: '!help',
                value: 'This is the command you just used'
            }, {
                name: '!ping',
                value: 'This command lets you know how much time in milliseconds (ms) I take to respond back'
            })
            .setTimestamp()
            .setFooter('Powered by Javascript');

        receivedMessage.channel.send(EmbedAmber);
    }
};