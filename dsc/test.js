module.exports.run = async (client, message, args) => {
    message.reply(`🏓 Latency is ${Math.round(client.ws.ping)}ms`)
}
module.exports.help = {
    name: "ping",
    aliases: ["test", "pong"]
}