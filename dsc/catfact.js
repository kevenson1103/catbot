const axios = require('axios');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    axios.get(`https://catfact.ninja/fact`)
    .then((fact) => {
        message.reply(`${fact.data.fact}`)
    })
    .catch((err) => {
        message.reply(`There was an error getting your fact!`)
        console.log(err)
    })
}

module.exports.help = {
    name: "catfact",
    aliases: ["ctafact", "fact"]
}