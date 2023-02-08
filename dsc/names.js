const Discord = require('discord.js');
const catNames = require('cat-names');
const fs = require('fs');

module.exports.run = async (client, message, args) => {
    message.reply(`One popular cat name is: ${catNames.random()}!`)

    fs.readFile('./dat/catNamesUsage.txt', 'utf8', (err, data) => {
        if(err) { console.log(err) }

        let newData = new Uint8Array(Buffer.from(`${+data + 1}`))
        fs.writeFile('./dat/catNamesUsage.txt', newData, (err) => {
            if(err) { console.log(err) }
        })
    })
}

module.exports.help = {
    name: "catname",
    aliases: ["catnames", "name"]
}