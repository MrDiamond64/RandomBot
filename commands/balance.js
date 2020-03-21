const Discord = require("discord.js");
const { prefix } = require("../config.json");
const fs = require("fs");

module.exports = {
  name: "balance",
  description: `Shows how much money you have in your bank!`,
  aliases: ["bal", "bank"],
  guildOnly: true,
  execute(message, args) {
    var moneyDB = JSON.parse(fs.readFileSync("./.data/coins.json", "utf8"));
    var member =
      message.mentions.members.first() ||
      message.guild.members.get(args[0]) ||
      message.member;
    
      if (!moneyDB[member.user.id]) {
        moneyDB[member.id] = {
          coins: 0,
          bank: 0
        };
      }
      var randomCoins = moneyDB[member.user.id].coins;
      var bankCoins = moneyDB[member.user.id].bank;
      const banLog = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`${member.user.username}'s balance`)
        .addField("Cash On Hand:", `$${randomCoins}`, true)
        .addField("Cash In Bank", `$${bankCoins}`, true)
        .setTimestamp()
        .setFooter("Beep Boop Bop! Im a bot using discord.js!");
      message.channel.send(banLog);
  }
};
