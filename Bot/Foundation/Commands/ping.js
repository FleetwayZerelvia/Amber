const Discord = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pongs back with time in ms'),
    async execute(interaction) {
        await interaction.reply(`**:ping_pong: Pong! Your Ping Is:-**\n  ${ping}ms`);
    },
};