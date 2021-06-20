module.exports = {
    name: 'hug',
    description: 'hug command',
    cooldown: 5,
    permissions: [],
    execute(client, message, args, cmd, Discord){
        const Member = message.member
        const target = message.mentions.members.first() || args.join(" ");
        const images = ["https://38.media.tumblr.com/64803cea1608cd0d55769a9db554b3dd/tumblr_n77iwxty5y1su8dqzo1_500.gif", "https://gifimage.net/wp-content/uploads/2018/10/anime-hug-cry-gif-4.gif", "https://media1.tenor.com/images/bb9c0c56769afa3b58b9efe5c7bcaafb/tenor.gif?itemid=16831471", "https://media.tenor.com/images/9fe95432f2d10d7de2e279d5c10b9b51/tenor.gif", "https://media.tenor.com/images/778282e02d511fbc061e1439a5105c6f/tenor.gif", "https://media.tenor.com/images/0abe1090ab9874c62c4baaac18f0994d/tenor.gif", "https://media.tenor.com/images/2e1d34d002d73459b6119d57e6a795d6/tenor.gif", "https://media.tenor.com/images/cee298437607d7b123bc9664c9ce844b/tenor.gif"]

        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setDescription(`${Member} hugs ${target}`)
        .setImage(images[Math.floor(Math.random() * images.length)])

        message.channel.send(embed);
    }
}