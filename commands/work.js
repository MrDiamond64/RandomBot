const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "work",
//  cooldown: 480,
  description: "Work hard to get imaginary Random Coins!.",
  guildOnly: false,
  args: false,
  execute: async message => {
    message.react("🖥️");
    var moneyDB = JSON.parse(fs.readFileSync("./.data/coins.json", "utf8"));
    var workMoney = Math.ceil(Math.random() * 50);
    workMoney * 10;
    if (!moneyDB[message.author.id]) {
      moneyDB[message.author.id] = {
        coins: workMoney,
        bank: 0
      };
    } else {
      var coins = Number(moneyDB[message.author.id].coins) + Number(workMoney);
      moneyDB[message.author.id] = {
        coins: coins,
        bank: Number(moneyDB[message.author.id].bank)
      };
    }
    await fs.writeFile("./.data/coins.json", JSON.stringify(moneyDB), err => {
      if (err) console.log(err);
    });
    const workCommand = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("You went to work")
      .setDescription(
        `Congratulations ${message.author.username}! You worked for 1 hour and earned \`$${workMoney}\` of Random Coins!`
      )
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(workCommand);
  }
};
