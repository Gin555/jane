module.exports = {
    name: 'pat',
    description: 'pat command',
    cooldown: 5,
    permissions: [],
    execute(client, message, args, cmd, Discord){
        const Member = message.member
        const target = message.mentions.members.first() || args.join(" ");
        const images = ['https://th.bing.com/th/id/R27dace4b6aec7de261ddb5d9444e716a?rik=7lOA8zk0wtmxDw&riu=http%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2017%2f09%2fanime-head-pat-gif.gif&ehk=0Vqf7jN%2fV4AcFkr3Y8FlBvtdx4n0h%2bx08RYDZ1GbqZg%3d&risl=&pid=ImgRaw', 'https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif', 'https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif?itemid=9920853', 'https://68.media.tumblr.com/f95f14437809dfec8057b2bd525e6b4a/tumblr_omvkl2SzeK1ql0375o1_500.gif', 'https://media.giphy.com/media/iGZJRDVEM6iOc/giphy.gif']

        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setDescription(`${Member} pat ${target}`)
        .setImage(images[Math.floor(Math.random() * images.length)])
        .setFooter('Developed by Gin Raijin')

        message.channel.send(embed);
    }
}