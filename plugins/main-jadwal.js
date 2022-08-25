let handler = async m => m.reply(`
𝘿𝘼𝙁𝙏𝘼𝙍 𝙅𝘼𝘿𝙒𝘼𝙇
𝙅𝘼𝘿𝙒𝘼𝙇 𝙎𝙀𝙉𝙄𝙉
𝙅𝘼𝘿𝙒𝘼𝙇 𝙎𝙀𝙇𝘼𝙎𝘼
𝙅𝘼𝘿𝙒𝘼𝙇 𝙍𝘼𝘽𝙐
𝙅𝘼𝘿𝙒𝘼𝙇 𝙆𝘼𝙈𝙄𝙎
𝙅𝘼𝘿𝙒𝘼𝙇 𝙅𝙐𝙈𝘼𝙏
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal|daftar jadwal|menu jadwal)$/i
handler.command = new RegExp

module.exports = handler