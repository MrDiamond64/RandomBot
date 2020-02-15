const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix } = require("../config.json");
const os = require("os");

module.exports = {
  name: "stats",
  description: `Bot Statictics!`,
  aliases: ["botstats", "botinfo"],
  execute(message) {
    const { commands } = message.client;
    function readableBytes(bytes) {
      var i = Math.floor(Math.log(bytes) / Math.log(1024)),
        sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + " " + sizes[i];
    }
    var freeRAM = readableBytes(os.freemem);
    var totalRAM = readableBytes(os.totalmem);
    const botStatsCommand = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Bot Status & Info!")
      .addField("Prefix:", `${prefix}`, true)
      .addField("Discord,js Version:", "11.5.1")
      .addField("Node.js Version", "10.15.3")
      .addField("Total RAM Free:", `${freeRAM}/${totalRAM}`)
      .addField("Total Command:", commands.size)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot made in discord.js!");
    message.channel.send(botStatsCommand);
  }
};
