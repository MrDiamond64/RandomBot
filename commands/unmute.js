const Discord = require("discord.js");

module.exports = {
  name: "unmute",
  guildOnly: true,
  memberName: "unmute",
  memberPermissions: ["MUTE_MEMBERS"],
  description: "Set member muted on voice channels",
  usage: `[person] [reason].`,
  args: true,
  execute(message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) {
      message.reply(
        "Uhmm NO! You dont have the right permissions to unmute people!!!"
      );
    }
    let member = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    let reason = args[1];
    member
      .setMute(false, reason)
      .catch(error =>
        message.reply(
          `${message.author} I couldn't unmute this person because of: ${error}`
        )
      );

    const channel = member.guild.channels.find(
      ch => ch.name === "logs",
      "modlogs",
      "mod-logs"
    );
    if (!channel) return;
    const unmuteEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Unmute")
      .setDescription(`Sucesfully Unmuted ${args[0]} `)
      .addField("Unmuted Person:", args[0], true)
      .addField("Reason Muted", args[1])
      .addField("Moderator", message.author)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(unmuteEmbed);
    channel.send(unmuteEmbed);
  }
};
