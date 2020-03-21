const Discord = require("discord.js");
const { prefix } = require("../config.json");

module.exports = {
  name: "clapify",
  aliases: ["clap"],
  usage: `[text]`,
  description: ":clap: MEME :clap: REVIEW :clap:!",
  args: true,
  execute(message, args) {
    var clappedText = args.slice(0).join(":clap:");
    message.channel.send(`**Heres all the claps!**\n:clap:${clappedText}:clap:`)
  }
};
