#!/usr/bin/env node
const moment = require('moment-timezone');
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: timezone-cli <TimeZone>');
  process.exit(1);
}

const tz = args[0];
if (!moment.tz.zone(tz)) {
  console.log('Invalid TimeZone. Example: Asia/Jakarta');
  process.exit(1);
}

console.log(`Current time in ${tz}: ${moment().tz(tz).format()}`);
