const { Client, Collection, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports.run = async (client, message, args) => {
    if(message.author.id !== "312734500880646145") return message.reply('You do not have permission to run this command. Sorry.')

        const embed = new Discord.MessageEmbed()
        .setColor(0xff00d0)
        .setTitle(`Current Bot Status`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/973719071352823838/973720104007237672/279936345_422397323222930_7232341584016774401_n.png`)
        .setDescription(`
        Ping: ${Math.round(client.ws.ping)}ms
        Number of Servers bot is in: ${client.guilds.cache.size}
        `)
        .setTimestamp()
        message.channel.send({embeds:[embed]})
}

module.exports.help = {
    name: "botstatus",
    aliases: []
}
