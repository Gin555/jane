module.exports = {
    name: 'laugh',
    description: 'laugh command',
    cooldown: 5,
    permissions: [],
    execute(client, message, args, cmd, Discord){
        const Member = message.member
        const target = message.mentions.members.first() || args.join(" ");
        const images = ['https://media1.tenor.com/images/e62fc9360b184a7dd8a0e786d5d594fc/tenor.gif?itemid=12381387', 'https://media1.tenor.com/images/fb80a2dd4fdb86c6eeee94125f23c161/tenor.gif?itemid=5060962', 'https://th.bing.com/th/id/R0834153562cc93fa75fd060396b6dee2?rik=OlLTt6Vi2jaQsg&riu=http%3a%2f%2fgifimage.net%2fwp-content%2fuploads%2f2017%2f07%2fanime-laugh-gif-26.gif&ehk=3AS1k41plKPCR%2fbORVGTzwsh1Z0sf4OXtAuP7wTOEYQ%3d&risl=&pid=ImgRaw', 'https://gifimage.net/wp-content/uploads/2017/07/anime-laughing-gif-8.gif']

        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setDescription(`${Member} laugh ${target}`)
        .setImage(images[Math.floor(Math.random() * images.length)])
        .setFooter('Developed by Gin Raijin')

        message.channel.send(embed);
    }
}