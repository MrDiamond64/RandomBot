const Discord = require("discord.js");
const { base64encode, base64decode } = require("nodejs-base64");
const { prefix } = require("../config.json");

module.exports = {
  name: "base64",
  description: `I will tell you your fortune!.`,
  aliases: ["encode", "decode", "base"],
  usage: `[encode/decode] [message]`,
  guildOnly: false,
  args: true,
  execute(message, args, commandName) {
    var option = commandName;
    try {
      switch (args[0]) {
        case "encode":
          if (!args.slice(1).join(" "))
            return message.reply("Yea but what do you even want to encode?");
          const encodebase64 = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Base64 Encoder")
            .setDescription("Encoded Sucesfully!")
            .addField("Decoded text:", args[1], true)
            .addField(
              "Encoded Text:",
              base64encode(args.slice(1).join(" ")),
              true
            )
            .setTimestamp()
            .setFooter("Beep Boop Bop! Im a bot made in discord.js!");
          message.channel.send(encodebase64);
          return;
        case "decode":
          if (!args.slice(1).join(" "))
            return message.reply("Hmmmmm Nah, what do you want to encode?");
          const decodebase64 = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle("Base64 Decoder")
            .setDescription("Decoded Sucesfully!")
            .addField("Encoded text:", args[1], true)
            .addField(
              "What It Said:",
              base64decode(args.slice(1).join(" ")),
              true
            )
            .setTimestamp()
            .setFooter("Beep Boop Bop! Im a bot made in discord.js!");
          message.channel.send(decodebase64);
          return;
      }
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }
  }
};
