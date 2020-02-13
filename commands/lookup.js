const Discord = require("discord.js");
const { prefix } = require("../config.json");

module.exports = {
  name: "lookup",
  aliases: ["userinfo", "usertrack", "whois", "user"],
  description: "Display info about yourself or other users.",
  guildOnly: true,
  execute(message, args) {
    message.react("🧔");
    const member =
      message.mentions.members.first() ||
      message.guild.members.get(args[0]) ||
      message.member;
    let target = message.mentions.users.first() || message.author;

    var userPresence = member.user.presence;
    JSON.stringify(userPresence);

    const userInfo = new Discord.RichEmbed()
      .setTitle("Shows user Information")
      .setThumbnail(target.displayAvatarURL)
      .setDescription("User Information")
      .setColor(`RANDOM`)
      .addField("Full Username", member.user.tag)
      .addField("User ID", member.user.id)
      .addField("User Status", `Status: ${userPresence}`)
      .addField("Is User Bot", member.user.bot)
      .addField("Joined Discord At", member.user.createdAt)
      .addField("Last Message Sent", `Last Message: ${member.user.lastMessage}`)
      .addField("Last Message Sent ID", `Last Message ID: ${member.user.lastMessageID}`)
      .setTimestamp()
      .setFooter(`Beep Bop Boop! Im a bot made in discord.js!`);
    message.channel.send(userInfo);
  }
};
