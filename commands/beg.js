const profileModel = require("../models/profileSchema");
module.exports = {
  name: "beg",
  aliases: [],
  cooldown: 15,
  permissions: [],
  description: "beg for coins",
  async execute(client, message, args, cmd, Discord, profileData){
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const replies = ['you begged on supermarket...', 'you begged to Bella Pourch']
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
    .setTitle(`${message.author.username}, you begged and recieved ${randomNumber} <:Jewel:844880613935939644>**coins**`)
    .setDescription(replies[Math.floor(Math.random() * replies.length)])

    return message.channel.send(embed);
  },
};

