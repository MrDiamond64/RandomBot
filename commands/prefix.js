const Discord = require("discord.js");
const fs = require("fs");
let prefixes = JSON.parse(fs.readFileSync("./.data/prefixes.json", "utf8"));
const { prefix } = require("../config.json");

module.exports = {
  name: "prefix",
  guildOnly: true,
  usage: `[wanted prefix]`,
  description: "Sets A Server Wide Prefix",
  execute(message, args) {
    if (args == "") {
      if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
          prefixes: prefix
        };
      }
      message.reply(
        `Server Prefix: ${JSON.stringify(prefixes[message.guild.id].prefixes)}`
      );
      return;
    }
    if (!message.member.hasPermission("MANAGE_GUILD")) {
      message.reply(`placeholder`);
    }

    prefixes[message.guild.id] = {
      prefixes: args[0]
    };

    fs.writeFile("./.data/prefixes.json", JSON.stringify(prefixes), err => {
      if (err) console.log(err);
    });

    let prefixEmbed = new Discord.RichEmbed()
      .setColor("#ff9900")
      .setTitle("Prefix Set!")
      .setDescription(`Set to ${args[0]}`);
    message.channel.send(prefixEmbed);
  }
};
