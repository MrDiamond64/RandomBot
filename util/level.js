const Discord = require("discord.js");
const fs = require("fs");

module.exports = message => {
  var levelsDB = JSON.parse(fs.readFileSync("./.data/levels.json", "utf8"));
  if (!levelsDB[message.author.id]) {
    levelsDB[message.author.id] = {
      xp: 0,
      level: 1
    };
  }
  var xp = levelsDB[message.author.id].xp;
  var level = levelsDB[message.author.id].level;

  var increaseXP = Math.ceil(Math.random() * 20);
  increaseXP * 5;
  var xp = xp + increaseXP
  var nextLevel = level * 200;

  if (xp >= nextLevel) {
    var level = level + 1;
    message.reply(`Congratulations! You leveled up to level ${level}`);
    var xp = xp - nextLevel
  }

  levelsDB[message.author.id] = {
    xp: xp,
    level: level
  };

  fs.writeFile("./.data/levels.json", JSON.stringify(levelsDB), err => {
    if (err) console.log(err);
  });
};
