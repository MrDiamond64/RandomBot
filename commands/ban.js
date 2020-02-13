const { prefix, botownerID } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'ban',
    description: `Bans Someone from the server!`,
    usage: `[username] [reason]`,
    guildOnly: true,
    args: true,
    execute(message, args) {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.reply('Uhmm NO! You dont have the right permissions to ban people!!!')
        return;
      }
        message.react('🔨');
        let member = message.mentions.members.first();

        if (message.mentions.users.first().id === message.author.id) {
          message.channel.send('No No No. Self-harm is bad! Dont ban yourself!');
          return;}

        if (message.mentions.users.first().id === botownerID) {
          message.reply('Hey! Dont Ban My Developer!')
          return; }
    
        if(!member)
          return message.reply("Umm I dont think thats a real person ");
        if(!member.bannable) 
          return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "No reason provided";
        member.ban(reason)
          .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));

        // Mod Logs
        const logschannel = member.guild.channels.find(ch => ch.name === 'logs', 'modlogs', 'mod-logs');
        if (!logschannel) return;
        const banLog = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Member Banned')
        .addField('Member:', member.user.tag, true)
        .addField('Reason', reason, true)
        .addField('Moderator', message.author)
        .setTimestamp()
        .setFooter('Beep Boop Bop! Im a bot using discord.js!');
        logschannel.send(banLog);
        message.channel.send(banLog)
	},
};