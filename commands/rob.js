const Discord = require("discord.js");
const { prefix } = require("../config.json");
const fs = require("fs");

module.exports = {
  name: "rob",
  description: `Shows how much money you have in your bank!`,
  uasge: "[mention person to rob]",
  aliases: ["steal", "robbery"],
  guildOnly: true,
  args: true,
  execute(message, args) {
    const member =
      message.mentions.members.first() || message.guild.members.get(args[0]);

    if (!member) return message.reply("but tell me who you want to rob from");

    if (member.user.id == message.author.id)
      return message.reply("Why would you ever want to rob yourself?");

    let moneyDB = JSON.parse(fs.readFileSync("./.data/coins.json", "utf8"));

    if (!moneyDB[member.user.id] || moneyDB[member.user.id].coins < 500)
      return message.reply(
        "Na man, he doesnt have 500 coins. not really worth it"
      );
    var otherPersonCoins = Number(moneyDB[member.user.id].coins);
    var coins = Number(moneyDB[message.author.id].coins) + otherPersonCoins;
    moneyDB[message.author.id] = {
      coins: coins,
      bank: Number(moneyDB[message.author.id].bank)
    };
    moneyDB[member.user.id] = {
      coins: 0,
      bank: Number(moneyDB[member.user.id].bank)
    };
    fs.writeFile("./.data/coins.json", JSON.stringify(moneyDB), err => {
      if (err) console.log(err);
    });

    const workCommand = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Robbery Results")
      .setDescription(
        `OMG! OMG! OMG! YOU STOLE **EVERYTHING**. You stole a total of \`$${otherPersonCoins}\` Random Coins`
      )
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(workCommand);
    member.send(`**New Message**\nOh No!\nSeems like ${message.author.tag} has stolen \`$${otherPersonCoins}\` Random Coins\nIn ${message.guild.name}!`)
  }
};
