const owo = require("@zuzak/owo");
const Discord = require("discord.js");

module.exports = {
  name: "owo",
  description: `<3 OwOify any stwing of text! >_>`,
  aliases: ["uwu", "owoify", "uwuify"],
  usage: `[text]`,
  cooldown: 5,
  args: true,
  execute(message, args, argstring) {
    var owoText = owo(argstring);
    const owoCommand = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("OwOify")
      .setDescription(`UwU! Covewted!`)
      .addField(`UwUed Text!`, owoText)
      .setTimestamp()
      .setFooter("<3 Beep Boop Bop! Im a bot using discowd.js! xD");
    message.reply(owoCommand);
  }
};
