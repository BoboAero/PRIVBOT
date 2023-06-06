require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const commands = [
    {
        name: 'return',
        description: 'Returns the message you send to it.',
        options: [
            {
                name: 'message',
                description: "What message it'll return.",
                type: 3,
                required: true,
            }
        ],
    },
    {
        name: 'ping',
        description: 'Returns pong'
    }
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
        try{
            console.log("Registering slash commands..");

            await rest.put(
                Routes.applicationGuildCommands(
                    process.env.BOT_ID,
                    process.env.GUILD_ID
                ),
                { body: commands }
            );

            console.log("commands registered.")
        }
        catch (error){
            console.log(`There was an error: ${error}`)
        }
    })();