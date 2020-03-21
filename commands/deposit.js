const Discord = require("discord.js");
const { prefix } = require("../config.json");
const fs = require("fs");

module.exports = {
  name: "deposit",
  description: `Deposit coins to your bank account!!`,
  usage: "[money to deposit]",
  aliases: ["dep"],
  args: true,
  execute(message, args) {
    let moneyDB = JSON.parse(fs.readFileSync("./.data/coins.json", "utf8"));
    var coins = Number(moneyDB[message.author.id].coins);
    var bank = Number(moneyDB[message.author.id].bank);
    
    var depositAmount = Math.floor(Number(args))

    if (coins < depositAmount)
      return message.reply("HELL NAH! You need more money cheapy head");
    if (depositAmount <= 0)
      return message.reply("dude, you cant deposit negative money");
    
    if (isNaN(args[0])) {
      if (args[0] == "all") {
        var depositAmount = Number(coins)
      } else if(args[0] == "half") {
        var depositAmount = coins / 2
      }
      if (isNaN(depositAmount)) return message.reply("So when did letters have to do with money?")
    }
    
    depositAmount = Math.floor(Number(depositAmount))
    
    moneyDB[message.author.id] = {
      coins: Number(coins) - Number(depositAmount),
      bank: Number(bank) + Number(depositAmount)
    };
    fs.writeFile("./.data/coins.json", JSON.stringify(moneyDB), err => {
      if (err) console.log(err);
    });

    const depResults = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Deposited")
      .setDescription(`You deposited \`$${depositAmount}\` to your bank`)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(depResults);
  }
};
