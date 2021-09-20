const Discord = require('discord.js');

const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]});

client.login('YOUR_BOT_TOKEN');

client.on('ready', async () => {
    console.log('Logged in with entity ' + client.user.tag)

    const data = {
        name: 'ping',
        description: 'Shows the bot ping',
    }
    await client.guilds.cache.get('YOUR_GUILD_ID')?.commands.create(data);
})

client.on('interactionCreate', async (interaction) => {

    if (interaction.isCommand()) {

        if (interaction.commandName === "ping") {

            await interaction.reply({content: `${client.ws.ping}ms`, ephemeral: false})
        }
    }
})