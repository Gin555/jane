module.exports = {
    name: 'fuck',
    description: 'fuck command',
    cooldown: 5,
    permissions: [],
    execute(client, message, args, cmd, Discord){
        const Member = message.member
        const target = message.mentions.members.first() || args.join(" ");
        const images = ['https://img-hw.xvideos.com/videos/profiles/galleries/88/2b/1d/kenneth48/gal4182965/pic_28_big.gif', 'https://66.media.tumblr.com/1cdd4d62843899d5c21f0fa1ec10390f/tumblr_pq4jhxMoYt1vu5b32_540.gif', 'https://th.bing.com/th/id/Rf952c2cec506faaecdf4de2cb782ca01?rik=COSa9l%2fKiq4EDg&riu=http%3a%2f%2f24.media.tumblr.com%2f8567f2aff64387bb7ab8b4ca23f82006%2ftumblr_n6gal6kSjH1qzo387o1_1280.gif&ehk=KaKHIG6%2f2%2fbKKm6x9tRE60PU6Wgbu8T6z0%2fjgrqWvDk%3d&risl=&pid=ImgRaw']
        const replies = ['Fuck me more!', 'Harder ughh', 'Yamete!!!', 'Kimochii']

        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setTitle(replies[Math.floor(Math.random() * replies.length)])
        .setDescription(`${Member} fucks ${target}`)
        .setImage(images[Math.floor(Math.random() * images.length)])
        .setFooter('Developed by Gin Raijin')

        if (message.channel.nsfw) {
            message.channel.send("This channel is NSFW.");
            message.channel.send(embed)
        } else {
            message.channel.send("This channel is SFW.");
        } 
    }
}