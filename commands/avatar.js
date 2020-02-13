const Discord = require('discord.js');
const { prefix } = require('../config.json');

module.exports = {
	name: 'avatar',
	description: 'Do You want someones super cool sick profile picture or whatever? Use this command!',
	usage: `[username]`,
	aliases: ['icon', 'pfp', 'avator'],
	execute(message) {
		message.react('🖼️');
		if (!message.mentions.users.size) {
			const avatarEmbed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setTitle('Your Profile Picture')
			.setURL(message.author.displayAvatarURL)
			.setThumbnail(message.author.displayAvatarURL)
			.addField('Profile Picture URL', message.author.displayAvatarURL)
			.setTimestamp()
			.setFooter('Beep Boop Bop! Im a bot using discord.js!');
			message.reply(avatarEmbed);
		}
		const avatarList = message.mentions.users.map(user => {
			const avatarEmbed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.setTitle('Avatar Grabber')
			.setURL(user.displayAvatarURL)
			.setDescription(`${message.author.username}'s Profile Picture `)
			.setThumbnail(user.displayAvatarURL)
			.addField('Avatar Picture URL', user.displayAvatarURL)
			.setTimestamp()
			.setFooter('Beep Boop Bop! Im a bot using discord.js!');
			message.reply(avatarEmbed);;
		});
		message.channel.send(avatarList);
	},
};