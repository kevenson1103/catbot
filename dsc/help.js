const Discord = require('discord.js');
const cats = require('cat-ascii-faces')

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor(0xff00d0)
    .setTitle(`${cats()}`)
    .setDescription(`
>ping/>pong/>test
>cat/>cta
>catname/>catnames/>name
>catfact/>ctafact/>fact
>help/>cmds/>commands
>prefix/>pre
`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/973719071352823838/973720104007237672/279936345_422397323222930_7232341584016774401_n.png`)
    .setTimestamp()
    message.channel.send({embeds:[embed]})
}

module.exports.help = {
    name: "help",
    aliases: ["cmds", "commands"]
}