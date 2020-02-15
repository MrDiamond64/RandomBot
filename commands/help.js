const { prefix } = require("../config.json");
const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "List all of my commands or info about a specific command.",
  aliases: ["commands"],
  usage: `[command name]`,
  execute(message, args) {
    message.react("📜");
    const { commands } = message.client;

    if (!args.length) {
      var commandList = commands.map(command => command.name).join(", ");

      var helpCommand = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Help Command")
        .setDescription(`List Of All Of My Commands`)
        .addField("Prefix:", prefix)
        .addField("Command:", commandList, true)
        .addField(
          "Command Usage",
          `You can message \`${prefix}help [command name]\``
        )
        .addField("Total Commands:", commands.size)
        .setTimestamp()
        .setFooter("Beep Boop Bop! Im a bot using discord.js!");
      message.channel.send(helpCommand);
      return;
    }

    const name = args[0].toLowerCase();
    const command =
      commands.get(name) ||
      commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) {
      return message.reply("that's not a valid command!");
    }
    if (!command.aliases) {
      const commandHelp = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Help")
        .setDescription(`${prefix}${args[0]} Help `)
        .addField(`Command Name `, args[0])
        .addField(`Command Description `, command.description)
        .addField("Command Usage", `${prefix}${args[0]} ${command.usage}`)
        .setTimestamp()
        .setFooter("Beep Boop Bop! Im a bot using discord.js!");
      message.reply(commandHelp);
    } else {
      const commandHelp = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Help")
        .setDescription(`${prefix}${args[0]} Help `)
        .addField(`Command Name `, args[0])
        .addField(`Command Description `, command.description)
        .addField("Command Usage", `${prefix}${args[0]} ${command.usage}`)
        .addField(`Command Aliases `, command.aliases.join(", "))
        .setTimestamp()
        .setFooter("Beep Boop Bop! Im a bot using discord.js!");
      message.reply(commandHelp);
    }
  }
};
