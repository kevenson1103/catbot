const axios = require('axios');
const Discord = require('discord.js');

module.exports.run = async (client, message, args, bot) => {
    axios.get(`https://cat-fact.herokuapp.com/facts/random`)
    .then((fact) => {
        message.reply(`Did you know: ${fact.data.text}`)
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