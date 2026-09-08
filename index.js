// Main bot entry point
// This file initializes and starts the Sunna-Bot
const Discord = require('discord.js');
const config = require('./core/config');
const commandLoader = require('./core/commandLoader');
const { setupEvents } = require('./core/context');

const client = new Discord.Client();

// Load configuration
config.load();

// Setup event handlers
setupEvents(client);

// Load commands
commandLoader.load(client);

// Login to Discord
client.login(config.get('token'));

module.exports = client;
