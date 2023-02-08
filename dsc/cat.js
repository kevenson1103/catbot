const axios = require('axios');
const Discord = require('discord.js');
const cats = require('cat-ascii-faces');

module.exports.run = async (client, message, args) => {
    axios.get(`https://api.thecatapi.com/v1/images/search`)
    .then((cat) => {
        const embed = new Discord.MessageEmbed()
        .setColor(0xff00d0)
        .setTitle(`Cat! ${cats()}`)
        .setImage(`${cat.data[0].url}`)
        .setTimestamp()
        message.channel.send({embeds:[embed]})
    })
    .catch((err) => {
        message.reply(`There was an error getting your cat!`)
        console.log(err)
    })
}

module.exports.help = {
    name: "cat",
    aliases: ["cta", "kot", "kit", "kat", "kitty"]
}
