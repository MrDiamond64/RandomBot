const Discord = require("discord.js");

module.exports = {
  name: "nick",
  description: "Change The Bots Nickname Or Change Someone Elses Nickname",
  aliases: ["nickname"],
  usage: `[username]`,
  cooldown: 5,
  args: true,
  guildOnly: true,
  execute(message, args, argstring) {
    if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
      message.reply(
        "Uhmm NO! You dont have the right permissions to change nicknames!!!"
      );
      return;
    }

    if (
      !message.mentions.members.first() ||
      message.guild.members.get(args[0])
    ) {
      message.guild.me.setNickname(argstring);
    } else {
      var member =
        message.mentions.members.first() || message.guild.members.get(args[0]);
      member.setNickname(args[1], args[2]);
    }
    const setNick = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Nickname Manager")
      .setDescription("Sucessfully Set Nickanme!")
      .addField("User:", member)
      .addField("Reason:", args[2])
      .addField("Moderator:", message.author)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(setNick);
  }
};
