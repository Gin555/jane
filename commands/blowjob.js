module.exports = {
    name: 'blowjob',
    description: 'blowjob command',
    cooldown: 5,
    permissions: [],
    execute(client, message, args, cmd, Discord){
        const Member = message.member
        const target = message.mentions.members.first() || args.join(" ");
        const images = ['https://th.bing.com/th/id/Rb391ec846342f09905bc43546a2af984?rik=fT1%2b9uwrNE%2fjKg&riu=http%3a%2f%2f78.media.tumblr.com%2fae9a6344cdd9beffe00fc4aae786bcce%2ftumblr_n8nz1pJlsy1rk78pwo1_500.gif&ehk=0lnBMQn4tlsFGcib7xWYQ%2bCFG8YsA9HiYTc5baReIos%3d&risl=&pid=ImgRaw', 'https://66.media.tumblr.com/699888d5d4f6f725aeecb75f0df61008/tumblr_oyb878UReB1wqyzoko4_500.gif', 'https://thumb-p4.xhcdn.com/a/0Q1s_nFqvx6aqXjC9_Inaw/000/115/036/564_1000.gif', 'https://th.bing.com/th/id/Rd02d6cacce61f7aeaae94e494137524e?rik=3BzcAmj1GF0i1w&riu=http%3a%2f%2f68.media.tumblr.com%2fc757083d7b9810d172639fd3384b6900%2ftumblr_n5c68pdsxQ1spoloao4_500.gif&ehk=71tewCUG82mnF0iy6IJK210CQ73EKi4WCGCKwNKg2vw%3d&risl=&pid=ImgRaw', 'https://th.bing.com/th/id/R6bdf48301060d9e9307bae5020de5d40?rik=j3yvKItIFGulJA&riu=http%3a%2f%2fimages.luscious.net%2f162%2flusciousnet_tumblr_mblp4nsvka1rrsoi_1757776219.gif&ehk=i8pbqgfTGeMDRGiuHKofKCRon1rCEQrcoY71cwx20cA%3d&risl=&pid=ImgRaw', 'https://hentaigifz.com/content/2021/04/cartoon-gif_001-36.gif']
        const replies = ['your pp is delicious', 'give me more!', 'kimochii']

        const embed = new Discord.MessageEmbed()
        .setColor('#98f5ff')
        .setTitle(replies[Math.floor(Math.random() * replies.length)])
        .setDescription(`${Member} blowjob ${target}`)
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