
const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
	name: 'server',
	description: 'Shows Info of the current server.',
    guildOnly: true,
	execute(message) {
		message.react('📜');
		const serverInfo = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setTitle('Server Information')
			.setDescription('Shows Server Information')
			.setThumbnail(message.guild.iconURL)
			.addField('Server Name:', message.guild.name, true)
			.addField('Server Name Acronym', message.guild.nameAcronym, true)
			.addField('Member Count:', message.guild.memberCount , true)
			.addField('Server Created At:', message.guild.createdAt, true)
			.addField('Server Region', message.guild.region, true)
			.addField('Server ID', message.guild.id, true)
			.addField('Server Roles', message.guild.roles, true)
			.addField('Verification Level', message.guild.verificationLevel, true)
			.addField('AFK Channel', message.guild.afkChannel, true)
			.addField('AFK Channel ID', message.guild.afkChannelID, true)
			.addField('AFK Timeout', message.guild.afkTimeout, true)
			.addField('Message Notification Setting', message.guild.defaultMessageNotifications, true)
			.addField('Exclusive Emojis', message.guild.emojis, true)
			.addField('Server Owner', message.guild.owner, true)
			.addField('Server Owner ID', message.guild.ownerID, true)
			.addField('Server Verified Status', message.guild.verified, true)

			.setTimestamp()
			.setFooter('Beep Boop Bop! Im a bot using discord.js!');
		message.channel.send(serverInfo);
	},
};
 