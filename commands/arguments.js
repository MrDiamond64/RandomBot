const { prefix } = require('../config.json');

module.exports = {
	name: 'arguments',
	description: 'Find Out Why Your Mom And Dad wants a divorce! Na JK this is a test tool!.',
	usage: `[argument]`,
	args: true,
	execute(message, args, argstring) {
		message.react('🤜');
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		message.channel.send(`Arguments: ${argstring}`);
	},
};