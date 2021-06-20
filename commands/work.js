const profileModel = require("../models/profileSchema");
module.exports = {
  name: "work",
  aliases: [],
  cooldown: 15,
  permissions: [],
  description: "work command",
  async execute(client, message, args, cmd, Discord, profileData){
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const replies = ['You work and get paid', 'you work as a Dancer and get paid']
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomNumber,
        },
      }
    );
    const embed = new Discord.MessageEmbed()
    .setColor('#98f5ff')
    .setTitle(`${message.author.username}, you work and recieved ${randomNumber} <:Jewel:844880613935939644>**coins**`)
    .setDescription(replies[Math.floor(Math.random() * replies.length)])

    return message.channel.send(embed);
  },
};

