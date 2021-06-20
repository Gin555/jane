module.exports = {
    name: 'cry',
    description: 'cry command',
    cooldown: 5,
    permissions: [],
    execute(client, message, args, cmd, Discord){
        const Member = message.member
        const target = message.mentions.members.first() || args.join(" ");
        const images = ['https://gifimage.net/wp-content/uploads/2017/09/anime-happy-cry-gif-9.gif', 'https://media1.tenor.com/images/61566d99bf989cf63c5a7a1557aec07c/tenor.gif?itemid=17471275', 'https://gifimage.net/wp-content/uploads/2017/07/anime-girl-crying-gif-21.gif', 'https://th.bing.com/th/id/Rb12c24604febc61846caa776496e6c5a?rik=glaYfZDSvVWkRw&riu=http%3a%2f%2f24.media.tumblr.com%2fbf54abc26dc4e4b2ecf9e77b4c8f7692%2ftumblr_mm6wlsvMLf1s6qf4ko1_500.gif&ehk=uQcbORVfpnwOVQljh2KKKFwdOvBGy7C2aIRoS%2fG5LFA%3d&risl=&pid=ImgRaw', 'https://media.giphy.com/media/b5z9pHJxxcREI/giphy.gif', 'https://68.media.tumblr.com/a3093a508b336215a5a85d66bcc09bd7/tumblr_nwux89wC381uhfu75o1_500.gif']

        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setDescription(`${Member} cries ${target}`)
        .setImage(images[Math.floor(Math.random() * images.length)])
        .setFooter('Developed by Gin Raijin')

        message.channel.send(embed);
    }
}