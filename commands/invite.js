exports.run = (bot, message, args) => {
		const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])

		if (!message.member.roles.some(r=>["Admin", "Administrator", "Mods", "Moderator"].includes(r.name)) )
			return message.reply("You are not authorized for this command");

		message.guild.channels.get('103020598606716928').createInvite({maxAge: amount}).then(invite =>
				message.channel.send(invite.url)
			);
	} // end of command invite