let handler = async m => m.reply(`
𝙈𝙀𝙉𝙐 𝙄𝙉𝙄 𝙇𝘼𝙂𝙄 𝙀𝙍𝙊𝙍 𝙔𝘼 𝙈𝘼𝘼𝙋
`.trim()) // Tambah sendiri kalo mau
handler.help = ['ayatquran']
handler.tags = ['quotes']
handler.command = /^(quran)$/i

module.exports = handler
