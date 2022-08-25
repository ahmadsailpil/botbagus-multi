let handler = async m => m.reply(`
      𝙅𝘼𝘿𝙒𝘼𝙇 𝙃𝘼𝙍𝙄 𝙎𝙀𝙉𝙄𝙉
 𝙋𝙆𝙉 / 𝘽.𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼 / 𝙄𝙋𝘼  
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal senin|jadwal hari senin|senin)$/i
handler.command = new RegExp

module.exports = handler