const profileModel = require("../models/profileSchema");
module.exports = {
  name: "withdraw",
  aliases: ["wd", "with"],
  permissions: [],
  description: "withdraw coins from your bank",
  async execute(client, message, args, cmd, Discord, profileData){
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Withdrawn amount must be a whole number");

    try {
      if (amount > profileData.bank) return message.channel.send(`You don't have that amount of coins to withdraw`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
            bank: -amount,
          },
        }
      );

      const embed = new Discord.MessageEmbed()
      .setColor('#98f5ff')
      .setTitle(`You withdrew ${amount}<:Jewel:844880613935939644> of coins into your wallet`)
      .setDescription('bank loves you! withdraw again soon')
      return message.channel.send(embed);
    } catch (err) {
      console.log(err);
    }
  },
};