const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix } = require("../config.json");

module.exports.logCommand = (message, argstring, commandName, messageAuthor) => {
  const channel = client.channels.get('674056189146955778')
   channel.send(channel, `**Command Used!**\nUsed Command: ${prefix}${commandName} ${argstring}.\nUsed by ${messageAuthor}`)
}

module.exports.logError = (message, commandName, error) => {
  const channel = client.channels.get('674056124562931722')
   channel.send(channel, `**Command Error!**\nCommand Used: ${prefix}${commandName}\nError: ${error}`)
}

module.exports.joinGuild = (message, guild) => {
  const channel = client.channels.get('674056160483082263')
   channel.send(channel, '**Joined New Guild!**\nGuild Name: ', guild.name, '\nGuild ID: ', guild.id, '\nGuild Members: ', guild.memberCount)
}

module.exports.leaveGuild = (message, guild) => {
   const channel = client.channels.get('674056160483082263')
   channel.send('**Left a Guild :slight_frown:**\nGuild Name: ', guild.name, '\nGuild ID: ', guild.id)
}