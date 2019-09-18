const { Client, RichEmbed, Collection } = require("discord.js");
const { config } = require("dotenv");
var mongo = require('mongodb');


const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

config({
    path: __dirname + "/.env"
});


["command"].forEach(handler => {
    require(`./handler/${handler}`)(client)
});

client.on('ready', () => {
    console.log('Bot Ready');

    client.user.setPresence({
        status: "online",
        game :{
            name: "Des parties de JDR",
            type: "WATCHING"
        }
    })
});

client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Bonjour ${member} et bienvenue au D20 Pub. Ici on parle de Jeux de Role autour d'un bon verre alors mets toi a l'aise !`);
    member.addRole("621425553530159105");
});

client.on('guildMemberRemove', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'welcome');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`${member} à payé sa note est et parti.`);
});

client.on("message", async message => {
    const prefix = "!";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);


    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message ,args);
});

client.login(process.env.TOKEN);

