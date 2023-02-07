const Discord = require('discord.js');
const fs = require("fs");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {

    let prefixes = JSON.parse(fs.readFileSync("../prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefix: config.prefix
        }
    }
    let prefix = prefixes[message.guild.id].prefix;

    if (!message.member.permissions.has("MANAGE_GUILD")) { return message.reply("you dont have permission to change this servers prefix") }

    if (!args[0]) return message.reply("No prefix given").then(msg => {
        msg.delete({ timeout: 15000 }).catch(console.error);
    })

    prefixes[message.guild.id] = {
        prefix: args[0]
    }

    fs.writeFile("../prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err);
    });

    let embed = new Discord.MessageEmbed()
        .setDescription(`**Prefix set to [ ${args[0]} ] for ${message.guild.name}!** `)
        .setTimestamp()
    message.channel.send({embeds:[embed]});
}

module.exports.help = {
    name: "prefix",
    aliases: ["pre"]
}