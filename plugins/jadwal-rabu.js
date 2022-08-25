let handler = async m => m.reply(`
      𝙅𝘼𝘿𝙒𝘼𝙇 𝙃𝘼𝙍𝙄 𝙍𝘼𝘽𝙐
 𝙋𝙀𝙉𝙅𝘼𝙎𝙆𝙀𝙎 / 𝙄𝙋𝙎 / 𝘽.𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼 / 𝘽𝙏𝘼
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal rabu|jadwal hari rabu|rabu)$/i
handler.command = new RegExp

module.exports = handler