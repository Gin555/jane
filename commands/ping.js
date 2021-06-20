module.exports = {
    name: 'ping',
    description: "ping command",
    aliases: ['p', 'ng'],
    cooldown: 2,
    permissions: [],
    execute(client, message, args, cmd){
        message.channel.send('pong!');
    }
}