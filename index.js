const {Client, Collection} = require('discord.js');
const client = new Client();
require('dotenv').config();

//All Importain Cache stuffs
client.commands = new Collection();
client.aliases = new Collection();
client.timeouts = new Map();
client.ticket = new Map();

//All variable that we need to store in Client
client.startup = new Date().getTime();
client.total = new Number("0");
client.guild = new Object();

//Command handler
require('./handlers/commands.js')(client);
require('./handlers/events.js')(client);

//Login to the bot
client.login(process.env.token);