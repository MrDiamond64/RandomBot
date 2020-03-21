const Discord = require("discord.js");
const fs = require("fs");
let serverPrefix = JSON.parse(
  fs.readFileSync("./.data/prefixes.json", "utf8")
);
const { prefix } = require("../config.json");

module.exports = {
  name: "prefix",
  guildOnly: true,
  usage: `[wanted prefix]`,
  description: "Sets A Server Wide Prefix",
  execute: async (message, args) => {
    if (args == "") {
      if (!serverPrefix[message.guild.id]) {
        serverPrefix[message.guild.id] = {
          prefixes: prefix
        };
      }
      message.reply(
        `Server Prefix: ${JSON.stringify(
          serverPrefix[message.guild.id].prefixes
        )}`
      );
      return;
    }
    if (!message.member.hasPermission("MANAGE_GUILD")) {
      message.reply(
        `Ummm, you need the \`MANAGE_SERVER\` permission to change the server prefix!!!`
      );
    }

    if (!serverPrefix[message.guild.id]) {
      var oldPrefix = prefix;
    } else var oldPrefix = serverPrefix[message.guild.id].prefixes;
    if (args[0] == oldPrefix)
      return message.reply(
        `:facepalm: Moron, "${args[0]}" is already the prefix.`
      );

    serverPrefix[message.guild.id] = {
      prefixes: args[0]
    };

    await fs.writeFile(
      "./.data/prefixes.json",
      JSON.stringify(serverPrefix),
      err => {
        if (err) console.log(err);
      }
    );

    let prefixEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Prefix Set!")
      .setDescription(`Set to ${args[0]}`)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(prefixEmbed);
  }
};
