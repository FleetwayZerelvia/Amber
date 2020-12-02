// at the top of your file
const Discord = require('discord.js');

// inside a command, event listener, etc.
const EmbedAmber = new Discord.MessageEmbed()
	.setColor('#FF2D00')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

channel.send(EmbedAmber);