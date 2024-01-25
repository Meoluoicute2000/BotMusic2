module.exports = async (client, textChannel, e) => {
if (textChannel){
   return textChannel?.send(`**Đã sảy ra lỗi:** ${e.toString().slice(0, 1974)}`)
}
}