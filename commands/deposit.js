const profileModel = require("../models/profileSchema");
module.exports = {
  name: "deposit",
  aliases: ["dep"],
  permissions: [],
  description: "Deposit coins into your bank!",
  async execute(client, message, args, cmd, Discord, profileData){
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Deposit amount must be a whole number");
    try {
      if (amount > profileData.coins) return message.channel.send(`You don't have that amount of coins to deposit`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
            bank: amount,
          },
        }
        );

      const embed = new Discord.MessageEmbed()
      .setColor('#98f5ff')
      .setTitle(`You Deposited ${amount}<:Jewel:844880613935939644> of coins into your bank`)
      .setDescription('The money is now safe in the bank')
      return message.channel.send(embed);
    } catch (err) {
      console.log(err);
    }
  },
};