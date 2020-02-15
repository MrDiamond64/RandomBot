const { prefix } = require("../config.json");

module.exports = {
  name: "purge",
  guildOnly: true,
  aliases: ["prune", "delmessage", "nuke"],
  usage: `[number]`,
  description: "Delete 1 to 99 messages.",
  args: true,
  execute(message, args) {
    message.react("🗑️");
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.reply(
        "Uhmm NO! You dont have the right permissions to delete messages!!!"
      );
      return;
    }
    const amount = parseInt(args[0]) + 1;
    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    } else if (amount <= 1 || amount > 100) {
      message.channel.bulkDelete(99, true).catch(err => {
        console.error(err);
        message.channel.send(
          "there was an error trying to prune messages in this channel!"
        );
        return;
      });
    }
    message.channel.bulkDelete(amount, true).catch(err => {
      console.error(err);
      message.channel.send(
        "there was an error trying to prune messages in this channel!"
      );
    });
  }
};
