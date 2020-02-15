const { prefix, botownerID } = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "kick",
  description: `Kick Someone from the server!.`,
  usage: `[username] [reason]`,
  guildOnly: true,
  args: true,
  execute(message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      message.reply(
        "Uhmm NO! You dont have the right permissions to kick people!!!"
      );
      return;
    }
    message.react("🥾");
    let member = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );

    if (!member) return message.reply("Umm I dont think thats a real person ");
    if (!member.kickable)
      return message.reply(
        "Error! I couldnt kick this person! Do I have kick perms?"
      );
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason provided";
    member
      .kick(reason)
      .catch(error =>
        message.reply(
          `Error ${message.author}! I couldn't kick because of : ${error}`
        )
      );
    // Mod Logs
    const logschannel = member.guild.channels.find(
      ch => ch.name === "logs",
      "modlogs",
      "mod-logs"
    );

    const memberKicked = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Member Kicked")
      .addField("Member:", member.user.tag, true)
      .addField("Reason", reason, true)
      .addField("Moderator", message.author)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(memberKicked);
    if (!logschannel) return;
    logschannel.send(memberKicked);
  }
};
