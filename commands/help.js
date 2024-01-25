const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "help",
  description: "Tất cả thông tin về Bot",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

      const embed = new EmbedBuilder()
        .setColor(client.config.embedColor)
       .setAuthor({
        name: 'Lệnh và thông tin Bot',
        iconURL: 'https://media.discordapp.net/attachments/1122191086501249034/1144865884901486612/7054-neon-info-icon.gif', 
        url: 'https://discord.gg/Na6FFYMPW6'
    })

        .setDescription("__**Các lệnh có sẵn :**__\n\n"+
"🎹 **Play**: Phát bài hát từ một liên kết hoặc tìm kiếm\n"+
"⏹️ **Stop**: Làm cho bot ngừng phát nhạc\n"+
"📊 **Queue**: Xem và quản lý hàng đợi bài hát\n"+
"⏭️ **Skip**: Bỏ qua bài hát hiện tại\n"+
"⏸️ **Pause**: Tạm dừng bài hát đang phát\n"+
"▶️ **Resume**: Tiếp tục bài hát đang tạm dừng\n"+
"🔁 **Loop**: Chuyển đổi chế độ vòng lặp\n"+
"🏓 **Ping**: Kiểm tra Ping của Bot\n"+
"🗑️ **Clear**: Xóa hàng đợi bài hát\n"+
"🔄 **Autoplay**: Bật hoặc tắt tính năng tự động phát\n"+
"🔊 **Volume**: Điều chỉnh âm lượng nhạc\n"+ 
"🎧 **Filter**: Áp dụng các bộ lọc để nâng cao âm thanh\n"+
"🔄 **247**: Kết nối và ngắt kết nối bot 24/7 từ kênh thoại")

               .setImage(`https://cdn.discordapp.com/attachments/1158456657794314350/1158457154022420560/gura.jpg`)

      const button1 = new ButtonBuilder()
      .setLabel('YouTube')
      .setURL('https://www.youtube.com/@Kidtomboy')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/Na6FFYMPW6')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('Source Code')
      .setURL('https://replit.com/@Meoluoicute2000/BotMusic1v?=1')
      .setStyle(ButtonStyle.Link);

    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);

      interaction.reply({ embeds: [embed], components: [row] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};