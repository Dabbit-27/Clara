/**
 * @file The starting point of Bastion
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license GPL-3.0
 */
//pinger
/**const http = require('https');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 120000);
//pings the bot every 2 minutes**/

const Tesseract = xrequire('tesseract');
const credentials = xrequire('./settings/credentials.json');
const configurations = xrequire('./settings/config.json');
const Manager = new Tesseract.ShardingManager('./main.js', {
  totalShards: configurations.shardCount,
  token: credentials.token
});
const log = xrequire('./handlers/logHandler');

Manager.spawn();

Manager.on('launch', shard => {
  log.info(`Launching Shard ${shard.id} [ ${shard.id + 1} of ${Manager.totalShards} ]`);
});
