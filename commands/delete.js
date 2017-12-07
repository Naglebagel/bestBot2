exports.run = (bot, message, args) => {
		const user = message.mentions.users.first();
		const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])

		if (!message.member.roles.some(r=>["Admin", "Administrator", "Mod", "Moderator"].includes(r.name)) )
			return message.reply("You are not authorized for this command");

		if (!amount) return message.reply('Please specify a number to delete')
		if(!amount && !	user) return message.reply('You need to specify an amount and user, or at least an amount to delete')

			message.channel.fetchMessages({
				limit:amount,
			}).then((messages) => {
				if(user) {
					const filterBy = user ? user.id : Client.user.id;
					messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
				}
				message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
			})
		}; //end of commad delete