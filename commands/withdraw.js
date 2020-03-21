const Discord = require("discord.js");
const { prefix } = require("../config.json");
const fs = require("fs");

module.exports = {
  name: "withdraw",
  description: `Withdraw coins to your wallet!!`,
  usage: "[money to withdraw]",
  aliases: ["with"],
  args: true,
  execute(message, args) {
    let moneyDB = JSON.parse(fs.readFileSync("./.data/coins.json", "utf8"));
    var bank = Number(moneyDB[message.author.id].bank);
    var coins = Number(moneyDB[message.author.id].coins)

    var withdrawAmount = Math.floor(Number(args))

    if (bank < withdrawAmount)
      return message.reply("HELL NAH! You need more money cheapy head");
    if (withdrawAmount <= 0)
      return message.reply("dude, you cant withdraw negative money");
    
    if (isNaN(args[0])) {
      if (args[0] == "all") {
        var withdrawAmount = bank
      } else if(args[0] == "half") {
        var withdrawAmount = bank / 2
      }
      if (isNaN(withdrawAmount)) return message.reply("So when did letters have to do with money?")
    }
    
    withdrawAmount = Math.floor(Number(withdrawAmount))
    
    moneyDB[message.author.id] = {
      coins: Number(coins) + Number(withdrawAmount),
      bank: Number(bank) - Number(withdrawAmount)
    };
    fs.writeFile("./.data/coins.json", JSON.stringify(moneyDB), err => {
      if (err) console.log(err);
    });

    const withdrawResults = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Withdrawn")
      .setDescription(`You withdrawn \`$${withdrawAmount}\` to your bank`)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(withdrawResults);
  }
};
