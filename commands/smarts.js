const Discord = require("discord.js");
const { prefix } = require("../config.json");

module.exports = {
  name: "smarts",
  description: `Honestly You Have Really Bad IQ`,
  aliases: ["iq", "iqtest", "howsmart"],
  execute(message, args, argstring) {
    var totalIQ = Math.ceil(Math.random() * 150);
    if (!args.length) {
      const iqTest = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("IQ Tester")
        .setDescription(`:brain: Your IQ Finder`)
        .addField(`Your IQ Is:`, `:brain: ${totalIQ} IQ :brain:`)
        .setTimestamp()
        .setFooter("Beep Boop Bop! Im a bot using discord.js!");
      message.reply(iqTest);
      return;
    }
    let person = args;
    var member = argstring;
    const iqTest = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("IQ Tester")
      .setDescription(`${member}'s IQ `)
      .addField(`${member}'s Total IQ is: `, `:brain: ${totalIQ} IQ :brain:`)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.reply(iqTest);
    return;
  }
};
