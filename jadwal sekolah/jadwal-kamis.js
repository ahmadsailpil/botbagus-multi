let handler = async m => m.reply(`
      𝙅𝘼𝘿𝙒𝘼𝙇 𝙃𝘼𝙍𝙄 𝙆𝘼𝙈𝙄𝙎
 𝘽.𝙄𝙉𝙂𝙂𝙍𝙄𝙎 / 𝙄𝙋𝘼 / 𝙈𝘼𝙏𝙀𝙈𝘼𝙏𝙄𝙆𝘼 / 𝙋𝘼𝙄
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal kamis|jadwal hari kamis|kamis)$/i
handler.command = new RegExp

module.exports = handler