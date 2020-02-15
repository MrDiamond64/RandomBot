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
      .addField(
        "Invite The Bot!",
        "https://discordapp.com/api/oauth2/authorize?client_id=627637402197950474&permissions=8&scope=bot"
      )
      .addField("Sum Random Code", "https://www.github.com")
      .addField(
        "My Youtube Channel!",
        "https://www.youtube.com/channel/UCyF81DXKfsncZ4_a7iVrehQ?sub_confirmation=1",
        true
      )
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(inviteEmbed);
  }
};
