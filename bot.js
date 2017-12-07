const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

bot.on('ready', () => {
	console.log('I am ready!');
});	

const talkedRecent = new Set();

bot.on('message', (message) => {

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();
  	const guild = message.guild;

	if(!message.content.startsWith(config.prefix) || message.author.bot) return;

	if (talkedRecent.has(message.author.id))
		return message.author.send('Stop spamming commands!');

		talkedRecent.add(message.author.id);

		setTimeout(() => {
			talkedRecent.delete(message.author.id);
		}, 5000);

	try {
		let commandFile = require(`./commands/${command}.js`);
		commandFile.run(bot, message, args);
		} catch (err) {
		console.error(err);
			}

}); // end of bot.on message



bot.login(process.env.BOT_TOKEN);

