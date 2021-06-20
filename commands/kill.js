module.exports = {
    name: 'kill',
    description: 'kill command',
    cooldown: 5,
    permissions: [],
    execute(client, message, args, cmd, Discord){
        const Member = message.member
        const target = message.mentions.members.first() || args.join(" ");
        const images = ['https://media1.tenor.com/images/0917e9f68e7d277135a9f885f953888b/tenor.gif?itemid=17763115', 'https://media1.tenor.com/images/2c945adbbc31699861f411f86ce8058f/tenor.gif?itemid=5459053', 'https://media1.tenor.com/images/a453af196f1856b9d5fde98cd1922745/tenor.gif?itemid=19367900', 'https://media1.tenor.com/images/a80b2bf31635899ac0900ea6281a41f6/tenor.gif?itemid=5535365']

        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setDescription(`${Member} kills ${target}`)
        .setImage(images[Math.floor(Math.random() * images.length)])
        .setFooter('Developed by Gin Raijin')

        message.channel.send(embed);
    }
}