const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
      name: 'mute',
      guildOnly: true,
      description: 'Set member muted on voice channels',
      usage: `[person] [reason].`,
      args: true,
      execute(message, args) {
        if (!message.member.hasPermission("MUTE_MEMBERS")) {
            message.reply('Uhmm NO! You dont have the right permissions to mute people!!!')
            return;
        }
            let member = message.mentions.members.first();
            let reason = args[1]

            if (message.mentions.users.first().id === message.author.id) {
                message.channel.send(`No No No! Self-isolation is bad! Don\'t ban yourself!`)
                return;} // smiley
            member.setMute(true, reason)
                .catch(error => {
                    message.reply(`${message.author} I couldn't mute this person because of: ${error}`);
                    return; 
                })
            const channel = member.guild.channels.find(ch => ch.name === 'logs', 'modlogs', 'mod-logs');
            const muteEmbed = new Discord.RichEmbed()
		        .setColor('RANDOM')
		        .setTitle('Mute')
		        .setDescription(`Sucesfully Muted ${args[0]} `)
                .addField('Muted Person:', args[0], true)
                .addField('Reason Muted', args[1])
                .addField('Moderator', message.author)
		        .setTimestamp()
		        .setFooter('Beep Boop Bop! Im a bot using discord.js!');
                message.channel.send(muteEmbed);
                if (!channel) return;
                channel.send(muteEmbed);

    }
};