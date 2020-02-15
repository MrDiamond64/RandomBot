const Discord = require("discord.js");
const { prefix } = require("../config.json");

module.exports = {
  name: "slowmode",
  description: "Sets/Shows The Current Channel Slowmode In Seconds.",
  guildOnly: true,
  usage: "[slowmode amount]",
  execute(message, args) {
    if (!args.length) {
      var ChannelSlowmode = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Channel Slowmode")
        .setDescription("Shows The Slowmode Timer On The Current Channel")
        .addField(
          "Slowmode:",
          `${message.channel.rateLimitPerUser} seconds`,
          true
        )
        .setTimestamp()
        .setFooter("Beep Boop Bop! Im a bot using discord.js!");
      message.channel.send(ChannelSlowmode);
      return;
    }
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
      message.reply(
        "Uhmm NO! You dont have the right permissions to Manage Channels!!!"
      );
      return;
    }
    if (isNaN(args[0])) {
      message.reply(
        `Hold Up. You really think ${
          args[0]
        } is actually a number? Got To School :facepalm:`
      );
    }
    message.channel.setRateLimitPerUser(args[0]);

    const channel = message.guild.channels.find(
      ch => ch.name === "logs",
      "modlogs",
      "mod-logs"
    );
    const channelSlowmode = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Channel Slowmode")
      .setDescription("Channel Slowmode Set!")
      .addField(
        "Sucesfully Change The Slowmode To:",
        `${args[0]} seconds`,
        true
      )
      .addField("Moderator", message.author)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(channelSlowmode);
    if (!channel) return;
    channel.send(channelSlowmode);
  }
};
