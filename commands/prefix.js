exports.run = (bot, message, args) => {
	const config = require('../config.json');
	const fs = require('fs');
	const adminRole = message.guild.roles.find("name", "Admin");

	if (!message.member.roles.has(adminRole.id))
	return message.reply("You can't use this command.");

	  let newPrefix = message.content.split(" ").slice(1, 2)[0];
	  config.prefix = newPrefix;

	  fs.writeFile("../config.json", JSON.stringify(config), (err) => console.error);
	  return message.channel.send(`Prefix updated to '${config.prefix}' `);
	};