const Discord = require('discord.js');
const catNames = require('cat-names');

module.exports.run = async (client, message, args) => {
    message.reply(`One popular cat name is: ${catNames.random()}!`)
}

module.exports.help = {
    name: "catname",
    aliases: ["catnames", "name"]
}