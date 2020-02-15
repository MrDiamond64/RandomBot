const Discord = require("discord.js");
const giphyToken = process.env.GIPHYTOKEN;
const GphApiClient = require("giphy-js-sdk-core");
const giphy = GphApiClient(process.env.GIPHYTOKEN);

module.exports = {
  name: "stickers",
  description: `Search On Giphy For Free Stickers/Emojis!`,
  aliases: ["sticker", "emoji", "emote"],
  usage: `[sticker name]`,
  cooldown: 5,
  args: true,
  execute(message, args) {
    giphy
      .search("stickers", { q: args })
      .then(response => {
        var totalResponse = response.data.length;
        var responseIndex = Math.floor(Math.random() * 10 + 1) % totalResponse;
        var responseFinal = response.data[responseIndex];
        message.channel.send(
          `${message.author} Heres Your Sticker! :slight_smile:`,
          {
            files: [responseFinal.images.fixed_height.url]
          }
        );
      })
      .catch(err => {
        const stickerCrash = new Discord.RichEmbed()
          .setColor("RED")
          .setTitle("Error")
          .setDescription(`Skrrrt Crash!`)
          .addField(
            `Oh No! There was an error looking for a Sticker!`,
            `Sticker: ${args}`
          )
          .addField("Error Log:", err, true)
          .setTimestamp()
          .setFooter("Beep Boop Bop! Im a bot using discord.js!");
        message.reply(stickerCrash);
        console.log(`Giphy Error: ${err}`);
      });
  }
};
