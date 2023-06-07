const { Client, IntentsBitField} = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`[index.js] ✅ ${c.user.tag} is online.`)
})
client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()){return};
    if (interaction.commandName == "ping"){
        interaction.reply("pong")
    }

    if (interaction.commandName == "ietsgays"){
        const user = interaction.user.username;
        interaction.reply(`${user} jij bent echt kkr gay`)
    }

    if (interaction.commandName == "return"){
        const msg = interaction.options.get('message').value;
        const user = interaction.user.username;
        interaction.reply(`${user} returned: ${msg}`)
    }
})

client.login(process.env.TOKEN);


