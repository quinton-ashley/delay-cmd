// time string is the desired delay time
module.exports = function(time) {
  const delay = require('delay');
  const humanInterval = require('human-interval');

  async function start() {
    console.log('waiting for' + time);
    await delay(humanInterval(time));
  }

  start();
}
