const Discord = require("discord.js");

module.exports = {
  name: "discrim",
  description: "Shows All Users with a discriminator or your discriminator.",
  alaises: ["discriminator"],
  guildOnly: true,
  execute(message, args) {
    if (args[0] == "") {
      let discrim = message.author.discriminator;
    } else var discrim = args[0];
    if (discrim >= `9999` || discrim <= `0001`) return message.reply(`Invalid Discriminator! Pick One between 0001 to 9999`)
    // allMember 
    var allMembers = message.guild.members
      
  var members = allMembers.exists('discriminator', discrim)
    .forEach(members => members = members, allMembers.tag)

    if (members == "")
      return message.reply(
        `Error! No Members found with the discriminator ${discrim}`
      );

    const discrimCommand = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Discriminator")
      .addField(`Member Count with discriminator ${discrim}:`, members.size)
      .addField(`Members with discriminator ${discrim}:`, JSON.stringify(members))
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(discrimCommand);
  }
};
