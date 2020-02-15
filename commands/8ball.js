const Discord = require("discord.js");
const { prefix } = require("../config.json");

module.exports = {
  name: "8ball",
  description: `I will tell you your fortune!`,
  aliases: ["eightball", "question", "magicconch", "magicball"],
  usage: `[question]`,
  guildOnly: false,
  args: true,
  execute(message, argstring) {
    message.react("🎱");
    var question = argstring;
    const answers = [
      "As I See It Yes",
      "Ask Me Again",
      "I Don't Know If I Can Tell You",
      "Cannot Predict",
      "Concentrate and Ask Me Again",
      "Don't Count On It",
      "It Is Certain",
      "It Is Decidely So",
      "Most Likely",
      "My Reply Is No",
      "My Sources Say No",
      "Signs Point to Yes",
      "Very Doubtful",
      "Without A Doubt",
      "Yes",
      "Yes - Definitely",
      "The Answer Lies Within You"
    ];
    const magicBall = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setAuthor(
        `8ball`,
        "http://8ballsportsbar.com/wp-content/uploads/2016/02/2000px-8_ball_icon.svg_.png"
      )
      .setTitle("Magic 8Ball")
      .setDescription(`The Magical 8ball Has Spoken!`)
      .addField("Question:", question, true)
      .addField("My Prediction", answers[~~(Math.random() * answers.length)])
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    message.channel.send(magicBall);
  }
};
