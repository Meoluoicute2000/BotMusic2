const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "owner",
  description: "Nhận thông tin về chủ sở hữu bot.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const youtubeLink = 'https://discord.gg/';
      const InstagramLink = 'https://www.instagram.com/Kidtomboy/';
      const { EmbedBuilder } = require('discord.js')
        const embed = new EmbedBuilder()
            .setColor('#da2a41')
            .setAuthor({
          name: 'Owner',
          iconURL: 'https://media.discordapp.net/attachments/1122191086501249034/1144865884901486612/7054-neon-info-icon.gif',
          url: 'https://discord.gg/'
        })
            .setDescription(`__**About me**__:\n 🤖 Đơn giản ,chỉ là công cụ hoạt động của Cherry dưới dạng BOT!\n ❤️ [Cherry](${youtubeLink})\n 💙 [Atstreak](${InstagramLink})`)
            .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};