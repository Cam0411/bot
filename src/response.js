require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'hey',
    description: 'Replies with hey!',
  },
  {
    name: 'ping',
    description: 'Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTA3NjUyNDk2OTYzNjQxMzQ0MQ.GUUYKb.rNPjdtF-fEuaN_5lmCuNakqcIey8yfYQTt9irg');

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();