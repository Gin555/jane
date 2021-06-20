module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    description: "Check the user balance",
    execute(client, message, args, cmd, Discord, profileData){
        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setTitle('Balance')
        .addFields(
            {name: 'Cash', value: `<:Jewel:844880613935939644>${profileData.coins}`},
            {name: 'Bank', value: `<:Jewel:844880613935939644>${profileData.bank}`},
        )
        message.channel.send(embed);
    }
}