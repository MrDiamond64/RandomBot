const Discord = require("discord.js");

module.exports = {
  name: "loveAffinity",
  description: `Have A Couple? Put yourself in this love tester!!`,
  aliases: ["lovemeter", "lovetest", "love"],
  usage: `[person]`,
  args: true,
  execute(message, argstring) {
    var person = argstring;
    const love = Math.random() * 100;
    const loveIndex = Math.ceil(love);
    const loveEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(`${message.author.tag}\'s Love Tester`)
      .addField("What To Test:", person)
      .addField("Love Level:", `${loveIndex}%`)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(loveEmbed);
  }
};
