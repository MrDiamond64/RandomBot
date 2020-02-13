const Discord = require('discord.js');

module.exports = {
    name: 'work',
    cooldown: 30,
    description: 'Work hard to get imaginary Random Coins!.',
    guildOnly: false,
    args: false,
    execute(message) {
        message.react('🖥️');
        var workMoney = Math.ceil(Math.random() * 50)
        workMoney * 10
        const workCommand = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('You went to work')
        .setDescription(`Congratulations ${message.author.username}! You worked for 1 hour and earned $${workMoney} of Random Coins! `)
        .setTimestamp()
        .setFooter('Beep Boop Bop! Im a bot using discord.js!');
        message.channel.send(workCommand);
    }
}