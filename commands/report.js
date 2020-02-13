const Discord = require('discord.js');

module.exports = {
	name: 'report',
    description: `Sends A Report to the bot owner`,
    usage: `[report] [reason]`,
    guildOnly: false,
    args: true,
    execute(message, args) {
        message.delete()
        console.log(`Report By ${message.author}. ${args}`)
        const reportCommand = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Reported!')
        .setDescription(`${message.author} Your report has been sent succesfully`)
        .addField('Report has been sent!')
        .setTimestamp()
        .setFooter('Beep Boop Bop! Im a bot using discord.js!');
        message.channel.send(reportCommand);
	},
};