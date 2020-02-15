const { prefix } = require("../config.json");
const crashgif =
  "https://cdn.glitch.com/da47eeb3-35c9-4334-865f-6334489ca4ee%2Fcrash.gif?v=1579149239250";

module.exports = {
  name: "crash",
  description: "Sends The iOS Crash Gif!",
  execute(message, args) {
    message.channel.send(`Time To Crash iOS Discord! :smile: ${crashgif}`);
    link: [crashgif];
  }
};
