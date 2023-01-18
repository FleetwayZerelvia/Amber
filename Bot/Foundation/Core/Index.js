const { Client, Collection, GatewayIntentBits, ActivityType } = require('discord.js');
const config = require('./Config/Config.json');
// const Keyv = require('keyv');

const prefix = config.globalPrefix;

// Set our intents here.
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
    ],
});

// Load all the commands
client.commands = new Collection();
const commandFiles = fs.readdirSync("./Commands").filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const commandName = file.split(".")[0];
    console.log(`Loading Command: ${commandName}`);
    const command = require(`./commands/${commandName}`);
    client.commands.set(commandName, command);
}

// Load all events
const eventFiles = fs.readdirSync("./events/").filter(file => file.endsWith(".js"));
for (const file of eventFiles) {
    const eventName = file.split(".")[0];
    console.log(`Loading Event: ${eventName}`);
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client, config));
  }

// Run a command when we detect our custom prefix
client.on('messageCreate', (message) => {
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName);
        if (!command) return;
        console.log(`Running Command: ${commandName}`);
        command.run(client, message, args);
    }
});

// Print Status
client.on('ready', () => {
    date = new Date()
	console.log(`${date.getMilliseconds()}: ${client.user.username} is ready!`);
    client.user.setPresence({
        status: "online",
        activities: [{
            name: "with code",
            type: ActivityType.Playing
        }]
    });
});

client.login(config.token);