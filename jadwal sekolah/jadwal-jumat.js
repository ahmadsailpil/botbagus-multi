let handler = async m => m.reply(`
      𝙅𝘼𝘿𝙒𝘼𝙇 𝙃𝘼𝙍𝙄 𝙅𝙐𝙈𝘼𝙏
 𝙎𝙀𝙉𝙄 𝘽𝙐𝘿𝘼𝙔𝘼
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal jumat|jadwal hari jumat|jumat)$/i
handler.command = new RegExp

module.exports = handler