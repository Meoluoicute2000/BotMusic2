const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "pause",
  description: "Dừng phát nhạc hiện đang phát.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);

    try {
      if (!queue || !queue.playing) {
        return interaction.reply({ content: '⚠️ Không phát nhạc!!', ephemeral: true });
      }

      const success = queue.pause();

      const embed = new EmbedBuilder()
        .setColor('#7645fe') 
        .setAuthor({
          name: 'Dừng phát nhạc',
          iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157296313013117049/8061-purple-pause-icon.png',
          url: 'https://discord.gg/'
        })
        .setDescription(success ? '**Nhạc đã bị tạm dừng !!**' : '❌ Lệnh Lỗi: Không thể tạm dừng bài hát')


      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};