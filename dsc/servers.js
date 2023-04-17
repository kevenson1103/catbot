const { Client, Collection, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


module.exports.run = async (client, message, args) => {
    if(message.author.id !== "312734500880646145") { return }
    const {MessageActionRow, MessageButton, MessageEmbed} = require('discord.js')
    // Constants
    
    const backId = 'back'
    const forwardId = 'forward'
    const backButton = new MessageButton({
      style: 'SECONDARY',
      label: 'Previous Page',
      emoji: '⬅️',
      customId: backId
    })
    const forwardButton = new MessageButton({
      style: 'SECONDARY',
      label: 'Next Page',
      emoji: '➡️',
      customId: forwardId
    })
    
    // Put the following code wherever you want to send the embed pages:
    
    const {author, channel} = message
    const guilds = [...client.guilds.cache.values()]
    
    /**
     * Creates an embed with guilds starting from an index.
     * @param {number} start The index to start from.
     * @returns {Promise<MessageEmbed>}
     */
    const generateEmbed = async start => {
      const current = guilds.slice(start, start + 10)
    
      // You can of course customise this embed however you want
      return new MessageEmbed({
        title: `Showing guilds ${start + 1}-${start + current.length} out of ${
          guilds.length
        }`,
        fields: await Promise.all(
          current.map(async guild => ({
            name: guild.name,
            value: `**ID:** ${guild.id}\n**Members:** ${guild.memberCount}`
          }))
        )
      })
    }
    
    // Send the embed with the first 10 guilds
    const canFitOnOnePage = guilds.length <= 10
    const embedMessage = await channel.send({
      embeds: [await generateEmbed(0)],
      components: canFitOnOnePage
        ? []
        : [new MessageActionRow({components: [forwardButton]})]
    })
    // Exit if there is only one page of guilds (no need for all of this)
    if (canFitOnOnePage) return
    
    // Collect button interactions (when a user clicks a button),
    // but only when the button as clicked by the original message author
    const collector = embedMessage.createMessageComponentCollector({
      filter: ({user}) => user.id === author.id
    })
    
    let currentIndex = 0
    collector.on('collect', async interaction => {
      // Increase/decrease index
      interaction.customId === backId ? (currentIndex -= 10) : (currentIndex += 10)
      // Respond to interaction by updating message with new embed
      await interaction.update({
        embeds: [await generateEmbed(currentIndex)],
        components: [
          new MessageActionRow({
            components: [
              // back button if it isn't the start
              ...(currentIndex ? [backButton] : []),
              // forward button if it isn't the end
              ...(currentIndex + 10 < guilds.length ? [forwardButton] : [])
            ]
          })
        ]
      })
    })
}
module.exports.help = {
    name: "servers",
    aliases: [""]
}