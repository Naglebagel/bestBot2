exports.run = (bot, message, args) => {

		const repeatMessage = args.join(" ");

		message.delete().catch(O=>{});

		message.channel.send(repeatMessage);
	} // end of command repeat