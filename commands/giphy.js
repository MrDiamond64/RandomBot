const Discord = require("discord.js");
const giphyToken = process.env.GIPHYTOKEN;
const GphApiClient = require("giphy-js-sdk-core");
const giphy = GphApiClient(process.env.GIPHYTOKEN);

module.exports = {
  name: "giphy",
  description: `Search On Giphy For Free GIFs!`,
  aliases: ["gif", "imgur"],
  usage: `[gif]`,
  cooldown: 5,
  args: true,
  execute(message, args) {
    giphy
      .search("gifs", { q: args })
      .then(response => {
        var totalResponse = response.data.length;
        var responseIndex = Math.floor(Math.random() * 10 + 1) % totalResponse;
        var responseFinal = response.data[responseIndex];
        if (typeof responseFinal.images === "undefined") {
          message.channel.send(`Error! I couldnt find any gifs named ${args}!`);
          return;
        }
        message.channel.send(
          `${message.author} Heres Your Gif! :slight_smile:`,
          {
            files: [responseFinal.images.fixed_height.url]
          }
        );
      })
      .catch(err => {
        const gifCrash = new Discord.RichEmbed()
          .setColor("RED")
          .setTitle("Error")
          .setDescription(`Skrrrt Crash!`)
          .addField(
            `Oh No! There was an error looking for a GIF!`,
            `GIF: ${args}`
          )
          .addField("Error Log:", err, true)
          .setTimestamp()
          .setFooter("Beep Boop Bop! Im a bot using discord.js!");
        message.reply(gifCrash);
        console.log(`Giphy Error: ${err}`);
      });
  }
};
