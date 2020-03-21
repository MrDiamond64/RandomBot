const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "ping",
  cooldown: 5,
  aliases: ["pong", "pingpong"],
  description: "Ping. Pong.",
  execute(message, args) {
    message.react("🏓");

    const pingInfo = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setTitle("Pong!")
      .setDescription("Shows Bot Latency And ping")
      .addField(
        "Latency:",
        `${Math.floor(Date.now() - message.createdTimestamp)}ms`,
        true
      )
      .addField("Api Latency:", `${Math.round(message.client.ping)}ms`, false)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot made in discord.js!");
    message.channel.send(pingInfo);
  }
};
