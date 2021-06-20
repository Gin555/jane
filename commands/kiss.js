module.exports = {
    name: 'kiss',
    description: 'kiss command',
    cooldown: 5,
    permissions: [],
    execute(client, message, args, cmd, Discord){
        const Member = message.member
        const target = message.mentions.members.first() || args.join(" ");
        const images = ['https://media0.giphy.com/media/bGm9FuBCGg4SY/giphy.gif?cid=ecf05e475u1oig0bgf7sx4hd6q1sty9l5i1n3vxfd23x5vxv&rid=giphy.gif&ct=g', 'https://media1.giphy.com/media/zkppEMFvRX5FC/giphy.gif?cid=ecf05e475u1oig0bgf7sx4hd6q1sty9l5i1n3vxfd23x5vxv&rid=giphy.gif&ct=g', 'https://media1.giphy.com/media/IdzovcoOUoUM0/giphy.gif?cid=ecf05e475u1oig0bgf7sx4hd6q1sty9l5i1n3vxfd23x5vxv&rid=giphy.gif&ct=g']

        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setDescription(`${Member} kiss ${target}`)
        .setImage(images[Math.floor(Math.random() * images.length)])
        .setFooter('Developed by Gin Raijin')

        message.channel.send(embed);
    }
}