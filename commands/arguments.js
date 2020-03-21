const { prefix } = require("../config.json");

module.exports = {
  name: "arguments",
  description:
    "com.randombot4211.command_name.arguments.module_exports.description",
  usage: `[argument]`,
  args: true,
  execute(message, args, argstring) {
    message.react("🤜");
    if (args[0] === "foo") {
      return message.channel.send("bar");
    }
    message.channel.send(`Arguments: ${argstring}`);
  }
};
