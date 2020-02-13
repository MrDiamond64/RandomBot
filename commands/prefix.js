const Discord = require("discord.js");
const { prefix } = require("../config.json");
const fs = require("fs");

module.exports = {
  name: "prefix",
  cooldown: 5,
  usage: `[prefix to set].`,
  description: "Views Or Sets The Server Prefix.",
  guildOnly: true,
  enabled: false,
  execute(message, args) {
    message.reply(`Error: this command is disabled`)
    return;
    if (args == "") {
      let prefixes = JSON.parse(
        fs.readFileSync("./.data/prefixes.json", "utf8")
      );
      prefixes[message.guild.id].prefixes;
      message.channel.send(`Prefix: ${prefixes}`);
      return;
    } else if (!message.member.hasPermission("MANAGE_SERVER")) {
      message.reply("NO! You Dont Have Permission To Use This Command!");
      return;
    }
    let prefixes = JSON.parse(fs.readFileSync("./.data/prefixes.json", "utf8"));
    prefixes[message.guild.id] = {
      prefixes: args[0]
    };

    fs.writeFile("./.data/prefixes.json", prefixes, "utf8", err => {
      if (err) throw err;
    });
  }
};
