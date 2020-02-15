const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
  name: "poll",
  cooldown: 5,
  aliases: ["question", "ask", "survey"],
  usage: `[channel] [timeout before poll ends].`,
  description: "Starts A Poll For Users To Participate In.",
  memberPermissions: ["MANAGES_MESSAGES"],
  guildOnly: true,
  args: true,
  execute(message, args) {
    var pollText = args[0];
    var pollChannel = args[1];
    var time = args[2];
    function convertSecondstoMilliSeconds(seconds) {}
    const pollEmbed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Poll")
      .setDescription(`Vote For This Poll/Survey!`)
      .addField("The Question Is:", pollText, true)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
    const channel = client.channels.get(pollChannel);
    channel.message.send(pollEmbed);
    message.react("636726991151693824");
    message.react("636726902664462337");
    var miliseconds = Math.floor(time * 1000);
    timeout(miliseconds);
    const pollEmbedEdit = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Poll")
      .setDescription(`Vote Ended`)
      .addField("The Question Is:", pollText, true)
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot using discord.js!");
  }
};
