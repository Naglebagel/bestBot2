exports.run = (bot, message, args) => {
		const embed = {
			"title": "Happy little trees",
			"url": "http://s2.quickmeme.com/img/db/db85d273ba221e6a543ebf76f53ba48ad0741f7d3ee54469010045e385e8944c.jpg",
			"color": 14791415,
			"timestamp": new Date(),
			"image": {
			"url": "http://s2.quickmeme.com/img/db/db85d273ba221e6a543ebf76f53ba48ad0741f7d3ee54469010045e385e8944c.jpg"
				},
			"author": {
				"name": bot.user.username,
				"icon_url": bot.user.avatarURL
				}
			};

		message.channel.send({embed})
	} // end of command happy
