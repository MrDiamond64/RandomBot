const Discord = require("discord.js");
let reddit = require("redditrandom");

module.exports = {
  name: "meme",
  description: `Search Reddit For A Fresh Meme!!`,
  aliases: ["memes", "dankmemes", "me_irl"],
  cooldown: 5,
  execute(message, args) {
    let entitledParents = async function() {
      let post = reddit.get("dankmemes");
      var img = post;
      const memeEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setURL(img)
      	.setThumbnail(img)
        .setTimestamp()
        .setFooter("Beep Boop Bop! Im a bot using discord.js!");
      message.channel.send(memeEmbed);
    };
  }
};
