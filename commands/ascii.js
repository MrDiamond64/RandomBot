const ascii = require('figlet');

module.exports = {
	name: 'ascii',
	description: 'Coverts Text To ASCII Art.',
	usage: `[text]`,
    cooldown: 5,
    aliases: [ `asci`, ],
    args: true,
	execute(message, argstring) {
        var text = argstring.shift().toUpperCase();
//        var text = args
        ascii(text, function(err, data) {
            if (err) {
                console.log(`ASCII Error! ${err}`);
                const asciiCrash = new Discord.RichEmbed()
                .setColor('RED')
                .setTitle('Error')
                .setDescription(`Skrrrt Crash!`)
                .addField(`Oh No! There was a error coverting ${text} to ASCII!`)
                .addField('Error Log:', err, true)
                .setTimestamp()
                .setFooter('Beep Boop Bop! Im a bot using discord.js!');
                message.reply(asciiCrash);
                return;
            } message.channel.send(`\`${data}\``)
//            message.channel.send(data)
        });
    }
};