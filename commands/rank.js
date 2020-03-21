const Discord = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "rank",
  cooldown: 5,
  aliases: ["level", "whatlevel"],
  description: "Shows What Level you are!",
  execute(message, args) {
    var levelsDB = JSON.parse(fs.readFileSync("./.data/levels.json", "utf8"));

    const member =
      message.mentions.members.first() ||
      message.guild.members.get(args[0]) ||
      message.member;

    if (!levelsDB[member.user.id]) {
      levelsDB[member.user.id] = {
        xp: 0,
        level: 1
      };
    }

    var xp = levelsDB[member.user.id].xp;
    var level = levelsDB[member.user.id].level;
    var nextLevel = level * 200;

    const workCommand = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(`${member.user.username}'s level`)
      .addField("XP:", `${xp}/${nextLevel}`)
      .addField("Level:", level)
      .setTimestamp()
      .setFooter("no");
    message.channel.send(workCommand);
  }
};
