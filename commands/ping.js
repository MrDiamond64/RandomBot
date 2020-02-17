const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "ping",
  cooldown: 5,
  aliases: ["pong", "pingpong"],
  description: "Ping. Pong.",
  execute: async(message, args) => {
    message.react("🏓");
    const msg = await message.channel.send(`🏓 Pinging....`);
    
    const pingInfo = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Pong!")
      .setDescription("Shows Bot Latency And ping")
      .addField(
        "Latency:",
        `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`,
        true
      )
      .addField("Api Latency:", `${Math.round(client.ping)}ms`, true)
//      .addField("Status:", `Command In Progress`, false)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot made in discord.js!");
    msg.edit(pingInfo);
  }
};
