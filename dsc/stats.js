const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
let fs = require('fs');

module.exports.run = async (client, message) => {

// calculating bot uptime
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

const uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`

// message code
        const embed = new Discord.MessageEmbed()
        .setColor(0xff00d0)
        .setTitle(`Stats for CatBot`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/973719071352823838/973720104007237672/279936345_422397323222930_7232341584016774401_n.png`)
        .addFields(
            { name: 'Current Ping:', value: `${Math.round(client.ws.ping)}ms`, inline: true },
            { name: 'Number of Servers CatBot is in:', value: `${client.guilds.cache.size}`, inline: true },
            { name: 'Uptime:', value: `${uptime}`, inline: true },

            { name: 'Times >cat has been used:', value: `${fs.readFileSync('./dat/catUsage.txt', { encoding: 'utf8'})}`, inline: true },
            { name: 'Times >catfact has been used:', value: `${fs.readFileSync('./dat/catFactUsage.txt', { encoding: 'utf8'})}`, inline: true },
            { name: 'Times >catname has been used:', value: `${fs.readFileSync('./dat/catNamesUsage.txt', { encoding: 'utf8'})}`, inline: true }
            
        )
        .setFooter({
            text: `This command is new! Usage data is only from after Feb 8th, 2023.`
        })
        .setTimestamp()
        message.channel.send({embeds:[embed]})
}

module.exports.help = {
    name: "stats",
    aliases: []
}
