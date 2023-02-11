const Discord = require('discord.js');
const cats = require('cat-ascii-faces')

module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor(0xff00d0)
    .setTitle(`${cats()}`)
    .setDescription(`
**Cat Commands:**
>cat/>cta **//** Shows a random cat pic!
>catname/>catnames/>name **//** Gives you name suggestions for cats!
>catfact/>ctafact/>fact **//** Gives you a random cat fact!
**Other commands:** 
>ping/>pong/>test **//** Gives you the bots current ping
>help/>cmds/>commands **//** Shows this command
>prefix/>pre { prefix } **//** changes the prefix for your server
>stats **//** Shows the bots stats
`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/973719071352823838/973720104007237672/279936345_422397323222930_7232341584016774401_n.png`)
    .setTimestamp()
    message.channel.send({embeds:[embed]})
}

module.exports.help = {
    name: "help",
    aliases: ["cmds", "commands"]
}