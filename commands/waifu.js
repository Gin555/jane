module.exports = {
    name: 'waifu',
    description: 'waifu command',
    cooldown: 5,
    permissions: [],
    execute(client, message, args, cmd, Discord){
        const Member = message.member
        const target = message.mentions.members.first() || args.join(" ");
        const images = ['https://th.bing.com/th/id/OIP.X3cAX-G8xp5_-Y2Oh8DtfQHaII?pid=ImgDet&rs=1', 'https://i.redd.it/nokacqkgzj831.jpg', 'https://vignette.wikia.nocookie.net/five-world-war/images/0/01/The_seventh_guild_master.png/revision/latest?cb=20181128002553', 'https://i.ytimg.com/vi/T3NoOllmH7c/maxresdefault.jpg', 'https://static.fandomspot.com/images/03/12998/35-chelsea-akame-ga-kill-anime.jpg', 'https://static.fandomspot.com/images/03/12998/34-kallen-stadtfeld-code-geass-anime.jpg', 'https://static.fandomspot.com/images/03/12998/32-shinobu-kochou-demon-slayer-anime.jpg', 'https://static.fandomspot.com/images/03/12998/30-morgiana-magi-the-labyrinth-of-magic-anime.jpg', 'https://static.fandomspot.com/images/03/12998/28-rem-re-zero-anime-screenshot.jpg', 'https://static.fandomspot.com/images/03/12998/22-esdeath-akame-ga-kill-anime.jpg', 'https://static.fandomspot.com/images/03/12998/15-shouko-nishimiya-a-silent-voice-anime.jpg', 'https://static.fandomspot.com/images/03/12998/12-emilia-re-zero-anime.jpg', 'https://static.fandomspot.com/images/03/12998/09-tsunade-naruto-shippuden-anime.jpg', 'https://static.fandomspot.com/images/03/12998/07-ikumi-mito-food-wars-anime.jpg', 'https://static.fandomspot.com/images/03/12998/06-rias-gremory-high-school-dxd-anime.jpg', 'https://static.fandomspot.com/images/03/12998/04-erza-scarlet-fairy-tail-anime-screenshot.jpg', 'https://static.fandomspot.com/images/03/12998/03-mai-sakurajima-rascal-does-not-dream-of-bunny-girl-senpai.jpg', 'https://static.fandomspot.com/images/03/12998/01-kurisu-makise-steins-gate-anime.jpg']

        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setDescription(`${Member} waifu is ${target}`)
        .setImage(images[Math.floor(Math.random() * images.length)])
        .setFooter('Developed by Gin Raijin')

        message.channel.send(embed);
    }
}