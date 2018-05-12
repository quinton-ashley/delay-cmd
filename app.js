#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));
const delay = require('delay');
const humanInterval = require('human-interval');

async function start() {
  let time = '';
  for (let word of argv._) {
    time += ' ' + word;
  }
  console.log('waiting for' + time);
  await delay(humanInterval(time));
}

start();
