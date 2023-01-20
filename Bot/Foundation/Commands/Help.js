const Discord = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Gives you a list of commands'),
    async execute(interaction) {
        await interaction.reply 
        EmbedAmber.setColor('#c73915')
            .setTitle('General Commands')
            .setAuthor('Available commands')
            .setDescription('You will find the public commands that i can offer for everyone')
            .setThumbnail('https://i.imgur.com/IJQSF1Q.jpg')
            .addFields({
                name: '/help',
                value: 'This is the command you just used'
            }, {
                name: '/ping',
                value: 'This command lets you know how much time in milliseconds (ms) I take to respond back'
            })
            .setTimestamp()
            .setFooter('Powered by Javascript');

        receivedMessage.channel.send(EmbedAmber);
    }
};