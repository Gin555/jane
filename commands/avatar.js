module.exports = {
    name: 'avatar',
    aliases: ['a'],
    cooldown: 10,
    permissions: [],
    description: "avatar command",
    execute(client, message, args, cmd, Discord){
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if (!mentionedMember) mentionedMember = message.member;
        const replies = ['nice avatar!!!', 'ugly bustard avatar shits!!!', 'beautiful!!!', 'amazing avatar!!!', 'lame avatar huh!']

        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setTitle(mentionedMember.user.tag + "'s Avatar")
        .setDescription(replies[Math.floor(Math.random() * replies.length)])
        .setImage(mentionedMember.user.displayAvatarURL({size: 4096, dynamic: true}));
        
        message.channel.send(embed);
    } 
}
