//require('dotenv').config(); //initialize dotenv
// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('ClickUp is online!');
});

// Test connection
client.on("messageCreate", message => {
    if (message.content.startsWith("!")) {
        if (message.content.substring(1) === "games"){
            message.reply("New game posted!");
        }
    }
})

/*client.on("messageCreate", message => {
    if (message.content.startsWith("!")){
        if (message.content.substring(1, message.content.indexOf(" "))){

        }
    }
})*/
// Login to Discord with your client's token
client.login(token);