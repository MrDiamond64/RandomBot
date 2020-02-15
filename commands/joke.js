const Discord = require("discord.js");
const jokes = require("one-liner-joke");

module.exports = {
  name: "joke",
  description: `Felling Bored? This Command Will Make A Joke That Will Laught Your Socks Off!.`,
  aliases: ["randomjoke", "funny", "laugh"],
  usage: `[custom tag]`,
  execute(message, args) {
    var joke = jokes.getRandomJoke({
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
    const jokeGen = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Joke Genorator")
      .setDescription(`Random Joke Selected!`)
      .addField("The Joke", joke, true)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(jokeGen);
  }
};
