const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: '8balls',
    description: '8balls command trial',
    aliases: ['ball', 'balls', '8b'],
    cooldown: 5,
    permissions: [],
    execute(client, message, args, cmd, Discord){
        const member = message.member
        const target = message.mentions.members.first() || args.join(" ");
        const replies = ['yes', 'probably', 'no', 'No way!', 'Heck yeah!', 'I dont think so...', 'You wish mother fucker!', "there's no way dude", "absolutely yes!!!", "We all know its a yes!", "I dont like your question", 'I dont need to answer that'];

        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setTitle(`${member.user.tag} question: ${target}`)
        .setDescription(replies[Math.floor(Math.random() * replies.length)])
        .setFooter('develop by gin raijin')

        message.channel.send(embed);
    }
}