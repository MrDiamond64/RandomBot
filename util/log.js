const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix } = require("../config.json");

module.exports.logCommand = (message, argstring, commandName, messageAuthor) => {
  const channel = '674056189146955778'
   client.sendMessage(channel, `Command Used! Used Command: ${prefix}${commandName} ${argstring}. Used by ${messageAuthor}`)
}

module.exports.logError = (message, commandName, error) => {
  const channel = '674056124562931722'
   client.sendMessage(channel, `Command Error! Command Used: ${prefix}${commandName} Error: ${error}`)
}

module.exports.joinGuild = (message, guild) => {
  const channel = '674056160483082263'
   client.csendMessage(channel, 'Joined New Guild! Guild Name: ', guild.name, 'Guild ID: ', guild.id, 'Guild Members: ', guild.memberCount)
}

module.exports.leaveGuild = (message, guild) => {
  const channel = '674056160483082263'
   client.channels.get(channel).send('Left a Guild :slight_frown: Guild Name: ', guild.name, 'Guild ID: ', guild.id)
}