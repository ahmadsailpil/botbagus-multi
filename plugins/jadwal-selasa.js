let handler = async m => m.reply(`
      𝙅𝘼𝘿𝙒𝘼𝙇 𝙃𝘼𝙍𝙄 𝙎𝙀𝙇𝘼𝙎𝘼
 𝘽.𝙄𝙉𝙂𝙂𝙍𝙄𝙎 / 𝙋𝙇𝙃/𝘽𝙆 / 𝙋𝙍𝘼𝙆𝘼𝙍𝙔𝘼 / 𝙄𝙋𝙎 / 𝙈𝘼𝙏𝙀𝙈𝘼𝙏𝙄𝙆𝘼
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal selasa|jadwal hari selasa|selasa)$/i
handler.command = new RegExp

module.exports = handler