const { prefix } = require("../config.json");
const Discord = require("discord.js");

module.exports = {
  name: "invite",
  description: `Invites me to your server!.`,
  aliases: ["botinvite", "join", "botjoin"],
  guildOnly: false,
  execute(message, args) {
    const inviteEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setURL(
        "https://discordapp.com/api/oauth2/authorize?client_id=627637402197950474&permissions=8&scope=bot"
      )
      .setTitle("Invite Menu")
      .setDescription("Invite Random Bot To Your Server")
      .addField("Add Random Bot", "[Click Me!](https://discordapp.com/api/oauth2/authorize?client_id=685689264293412896&permissions=8&scope=bot)")
      .addField("Sum Random Code", "[Click Me!](https://www.github.com/MrDiamond64/randombot)")
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(inviteEmbed);
  }
};
