const client = require('..')
const chalk = require('chalk')

client.on("ready", () => {
	const activities = [
		{ name: `${client.guilds.cache.size} Servers`, type: 2 }, // LISTENING
		{ name: `${client.channels.cache.size} Channels`, type: 2 }, // PLAYING
		{ name: `${client.users.cache.size} Users`, type: 3 }, // WATCHING
		{ name: `www.codebox.my.id`, type: 0 } // COMPETING
	];
	const status = [
		'online',
		'dnd',
		'idle'
	];
	let i = 0;
	setInterval(() => {
		if(i >= activities.length) i = 0
		client.user.setActivity(activities[i])
		i++;
	}, 10000);

	let s = 0;
	setInterval(() => {
		if(s >= activities.length) s = 0
		client.user.setStatus(status[s])
		s++;
	}, 30000);
	console.log(chalk.red(`Logged in as ${client.user.tag}!`))
});
