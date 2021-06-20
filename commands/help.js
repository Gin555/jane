module.exports = {
    name: 'help',
    description: 'help command',
    aliases: ['hp'],
    cooldown: 10,
    permissions: [],
    execute(client, message, args, cmd, Discord){
        const member = message.member
        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setTitle(`${member.user.tag} Hi!!! here's all the command available`)
        .setDescription('all the following are the official commands')
        .addFields(
            {name: 'Roleplay Commands', value: 'fuck, kiss, hug, kill, cry, laugh, pat, blowjob'},
            {name: 'Fun Commands', value: '8balls, avatar, waifu, pp'},
            {name: 'Other Commands', value: 'ping, test, avatar'},
            {name: 'Economy Command', value: 'work, beg, bal, deposit, withdraw'},
        )

        message.channel.send(embed);
    }
}