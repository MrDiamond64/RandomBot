const Discord = require("discord.js");
const { prefix } = require("../config.json");

module.exports = {
  name: "math",
  cooldown: 5,
  aliases: ["add", "subtract", "multiply", "divide", "calc", "calculator"],
  usage: `[number] [sign] [number2].`,
  description: "A Calculator in a discord bot",
  args: true,
  execute(message, args) {
    var num1 = args[0];
    var sign = args.shift().toLowerCase();
    var num2 = args[2];
    var ans = 0;
    if (sign == "+") {
      var ans = num1 + num2;
    } else if (sign == "-") {
      var ans = num1 - num2;
    } else if (sign == "x") {
      var ans = num1 * num2;
    }
    const mathEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Calculator")
      .setDescription("Solve Math Equations")
      .addField("Question:", args, true)
      .addField(`Asnwer:`, ans, true)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(mathEmbed);
  }
};
