const Discord = require(`discord.js`);

module.exports = {
  name: `rps`,
  cooldown: 2,
  aliases: [`rock`, `paper`, `scissors`],
  description: `Play Rock Paper Scissors With Me!`,
  usage: `[selection]`,
  execute(message, args) {
    const rpc = [`rock`, `paper`, `scissors`];
    var selection = rpc[~~(Math.random() * rpc.length)];

    if (args == "") {
      var userpick = rpc[~~(Math.random() * rpc.length)];
    } else {
      var userpick = args[0];
      userpick = args.shift().toLowerCase();
    }

    if (userpick === selection) {
      const tieRPC = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Rock Paper Scissors")
        .setDescription("Tie!")
        .addField("I Picked:", selection, true)
        .addField("You Picked:", userpick, true)
        .setTimestamp()
        .setFooter("Beep Boop Bop! Im a bot made in discord.js!");
      message.channel.send(tieRPC);
      return;
    }
    if (userpick === `rock`) {
      if ((selection = `paper`)) {
        const rpsLose = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Rock Paper Scissors")
          .setDescription("You Lose!")
          .addField("I Picked:", selection, true)
          .addField("You Picked:", userpick, true)
          .setTimestamp()
          .setFooter("Beep Boop Bop! Im a bot made in discord.js!");
        message.channel.send(rpsLose);
        return;
      } else if (selection === `scissors`) {
        const winRPC = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Rock Paper Scissors")
          .setDescription("You Win!")
          .addField("I Picked:", selection, true)
          .addField("You Picked:", userpick, true)
          .setTimestamp()
          .setFooter("Beep Boop Bop! Im a bot made in discord.js!");
        message.channel.send(winRPC);
        return;
      }
    }
    if (userpick === `paper`) {
      if (selection === `rock`) {
        const winRPC = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Rock Paper Scissors")
          .setDescription("You Win!")
          .addField("I Picked:", selection, true)
          .addField("You Picked:", userpick, true)
          .setTimestamp()
          .setFooter("Beep Boop Bop! Im a bot made in discord.js!");
        message.channel.send(winRPC);
        return;
      } else if (selection === `scissors`) {
        const rpsLose = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Rock Paper Scissors")
          .setDescription("You Lose!")
          .addField("I Picked:", selection, true)
          .addField("You Picked:", userpick, true)
          .setTimestamp()
          .setFooter("Beep Boop Bop! Im a bot made in discord.js!");
        message.channel.send(rpsLose);
        return;
      }
    }
    if (userpick === `scissors`) {
      if (
        selection === `rock. you picked ${userpick} and i picked ${selection}`
      ) {
        const rpsLose = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Rock Paper Scissors")
          .setDescription("You Lose!")
          .addField("I Picked:", selection, true)
          .addField("You Picked:", userpick, true)
          .setTimestamp()
          .setFooter("Beep Boop Bop! Im a bot made in discord.js!");
        message.channel.send(rpsLose);
        return;
      } else if (selection === `paper`) {
        const winRPC = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Rock Paper Scissors")
          .setDescription("You Win!")
          .addField("I Picked:", selection, true)
          .addField("You Picked:", userpick, true)
          .setTimestamp()
          .setFooter("Beep Boop Bop! Im a bot made in discord.js!");
        message.channel.send(winRPC);
        return;
      }
    }
    const winRPC = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Rock Paper Scissors")
      .setDescription("Invalid Selection")
      .addField('Invalid Selection! use "Rock" "Paper" Or "Scissors" To Play!')
      .setTimestamp()
      .setFooter("Beep Boop Bop! Im a bot made in discord.js!");
    message.channel.send(winRPC);
  }
};