const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "nick",
  description: "Change The Bots Nickname Or Change Someone Elses Nickname",
  aliases: ["nickname"],
  usage: `[username]`,
  cooldown: 5,
  args: true,
  guildOnly: true,
  execute(message, args) {
    let member = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!member) {
      client.member.setNickname(args);
    } else {
      message.member
        .setNickname(args[1])
        .catch(error =>
          message.reply(
            `Sorry ${message.author} I couldn't Nickname because of : ${error}! Contact Support`
          )
        );
      message.reply(`placeholder`);
    }
  }
};
