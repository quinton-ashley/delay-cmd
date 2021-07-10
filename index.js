// time string is the desired delay time
module.exports = async function(time) {
	const delay = require('delay');
	const humanInterval = require('human-interval');

	console.log('waiting for ' + time);
	await delay(humanInterval(time));
}
