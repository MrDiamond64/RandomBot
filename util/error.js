const Discord = require("discord.js");

module.exports.missingPerm = (message, commandName, missingPerm) => {
      const permissionEmbed = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle("Error")
      .setDescription("Hey ${message.author}! You Dont Have The Correct Permission(s) Required to do this!")
      .addField("Missing Perm:", "\`${missingPerm}\``")
      .addField("Command:", commandName)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(permissionEmbed);
}