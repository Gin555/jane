module.exports = {
    name: 'pp',
    description: '8balls command trial',
    aliases: [],
    cooldown: 5,
    permissions: [],
    execute(client, message, args, cmd, Discord){
        const member = message.member
        const target = message.mentions.members.first() || args.join(" ");
        const replies = ['8=D', '8===D', '8====D', '8===========D', '8======D', '8=====================D', '8======D', 'that user dont even have pp...']

        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setTitle(`${member.user.tag} pp size is`)
        .setDescription(replies[Math.floor(Math.random() * replies.length)])
        .setFooter('develop by gin raijin')

        message.channel.send(embed);
    }
}