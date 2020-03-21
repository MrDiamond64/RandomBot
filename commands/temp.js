const Discord = require("discord.js");
const fs = require("fs");
var moneyDB = JSON.parse(fs.readFileSync("./.data/coins.json", "utf8"));

module.exports = {
  name: "temp",
  "description": "com.randombot4211.command.temp.module_exports.description",
  execute(message, args) {
    if (!message.author.id == 284342986547134464) {
      if (!message.author.id == 311270483972587529) return;
      return;
    }
    const member =
      message.mentions.members.first() ||
      message.guild.members.get(args[0]) ||
      message.member;

    moneyDB = JSON.parse(fs.readFileSync("./.data/coins.json", "utf8"));

    if (!moneyDB[member.user.id]) {
      moneyDB[member.user.id] = {
        coins: 0,
        bank: 0
      };
    }

    if (!args[1]) {
      var coins = 999999;
    } else var coins = args[1];

    if (!args[2]) {
      var bank = moneyDB[member.user.id].bank;
    } else var bank = args[2];

    moneyDB[member.user.id] = {
      coins: Number(coins),
      bank: Number(bank)
    };
    fs.writeFile("./.data/coins.json", JSON.stringify(moneyDB), err => {
      if (err) console.log(err);
    });
  }
};
