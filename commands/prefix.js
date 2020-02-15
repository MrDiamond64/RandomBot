const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (message, args) => {
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  
    if (!args) {
      message.reply(`Server Prefix: ${prefixes}`)
      return;
    }
    if(!message.member.hasPermission("MANAGE_SERVER")) {
      message.reply(`placeholder`)
    }
    
    prefixes[message.guild.id] = {
        prefixes: args[0]
    };
    
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });
    
    let prefixEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Prefix Set!")
    .setDescription(`Set to ${args[0]}`);
    
    message.channel.send(prefixEmbed);
}