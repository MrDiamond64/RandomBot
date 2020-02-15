const Discord = require("discord.js");
const { prefix } = require("../config.json");

module.exports = {
  name: "reload",
  description: "Reloads a command",
  aliases: ["reset", "restart", "fixcommand"],
  usage: `[command name]`,
  args: true,
  execute(message, args) {
    message.react("🔃");
    const commandName = args[0].toLowerCase();
    const command =
      message.client.commands.get(commandName) ||
      message.client.commands.find(
        cmd => cmd.aliases && cmd.aliases.includes(commandName)
      );

    if (!command) {
      return message.channel.send(
        `There is no command with name or alias \`${commandName}\`, ${message.author}!`
      );
    }

    delete require.cache[require.resolve(`./${commandName}.js`)];

    try {
      const newCommand = require(`./${commandName}.js`);
      message.client.commands.set(newCommand.name, newCommand);
    } catch (error) {
      console.log(error);
      return message.channel.send(
        `There was an error while reloading a command \`${commandName}\`:\n\`${error.message}\``
      );
    }
    const reloadCommand = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Reload Command")
      .setDescription(`Sucesfully reloaded ${commandName}`)
      .addField(
        "Sucesfully Reloaded the Command:",
        `${prefix}${commandName}`,
        true
      )
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(reloadCommand);
  }
};
