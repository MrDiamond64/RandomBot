const Discord = require("discord.js");

module.exports = {
  name: "someone",
  description: `AHHHHHHHH HELP!!!!!!!!!!!! CALL AN AMBULANCE!!`,
  aliases: ["@someone"],
  usage: `[text]`,
  args: true,
  guildOnly: true,
  execute(message, argstring) {
    if (!message.member.hasPermission("MENTION_EVERYONE")) {
      message.reply(
        "Uhmm NO! You dont have the right permissions to mention everyone!!!"
      );
      return;
    }
    var randomMention = message.guild.members.random();
    const someone = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(`@someone`)
      .addField("Random Mention:", randomMention)
      .addField("Requested By:", message.author)
      .addField(`Message:`, argstring)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(randomMention, someone);
  }
};
