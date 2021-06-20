module.exports = {
    name: 'test',
    description: "this is a test command",
    aliases: ['t'],
    cooldown: 0,
    permissions: [],
    execute(client, message, args, cmd){
        message.channel.send('hello world');
    }
}