const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "stop",
  description: "Dừng nhạc.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) {
        return interaction.reply({ content: '⚠️ Không chơi nhạc!!', ephemeral: true });
      }

      queue.stop(interaction.guild.id);

      const embed = new EmbedBuilder()
        .setColor('#f1002c')
        .setAuthor({
          name: 'Đã dừng nhạc',
          iconURL: 'https://cdn.discordapp.com/attachments/1156866389819281418/1157305318255116400/pngtree-vector-stop-icon-png-image_4233262.jpg',
          url: 'https://discord.gg/'
        })
        .setDescription('**Đã tạm dừng nhạc.**')


      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};