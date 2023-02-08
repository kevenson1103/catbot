const axios = require('axios');
const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (client, message, args) => {
    axios.get(`https://catfact.ninja/fact`)
    .then((fact) => {
        message.reply(`${fact.data.fact}`)
    })
    .catch((err) => {
        message.reply(`There was an error getting your fact!`)
        console.log(err)
    })

    fs.readFile('./dat/catFactUsage.txt', 'utf8', (err, data) => {
        if(err) { console.log(err) }

        let newData = new Uint8Array(Buffer.from(`${+data + 1}`))
        fs.writeFile('./dat/catFactUsage.txt', newData, (err) => {
            if(err) { console.log(err) }
        })
    })
}

module.exports.help = {
    name: "catfact",
    aliases: ["ctafact", "fact", "ctafcta", "fcta", "catfcta", "fcat", "ctafcat", "catfcat"]
}
