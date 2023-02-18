
const { Client, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        // GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})
client.on('ready', () =>{
console.log('works')
})

client.on('interactionCreate', (interaction) => {
    if (interaction.isCommand() && interaction.commandName === 'ping') {
        interaction.reply({content: 'Pong!'});
    }
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
      return;
    }
    if (message.content === "hello"){
        message.reply("Welcome Back Cam")
    }
    if (message.content === `random`) {
        var rating = Math.floor(Math.random() * 100) + 1;
        message.reply(`the random value is ${rating}`)
     }
  });




client.login('MTA3NjUyNDk2OTYzNjQxMzQ0MQ.GUUYKb.rNPjdtF-fEuaN_5lmCuNakqcIey8yfYQTt9irg')


