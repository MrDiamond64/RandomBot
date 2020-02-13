const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
	name: 'meme',
    description: `Search Reddit For A Fresh Meme!!`,
    aliases: ['memes', 'dankmemes', 'me_irl'],
    cooldown: 5,
    execute(message, args) {
        const img = randomPuppy(dankmemes);
        const memeEmbed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`From /r/${random}`)
            .setURL(`https://reddit.com/r/dankmemes`)
            .setTimestamp()
            .setFooter('Beep Boop Bop! Im a bot using discord.js!');
        message.channel.send(memeEmbed);
    }
};