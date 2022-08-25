let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/f79970601b4ca4e0a8e71.png', m, { packname: "𝘼𝙎𝙀𝙋𝘽𝙊𝙏𝙕", author: "@𝙍𝙄𝘿𝙃𝙊" })
}

handler.customPrefix = /^(p)$/i
handler.command = new RegExp

module.exports = handler
