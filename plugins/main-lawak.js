let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/3e49a66125d766426ee5f.png', m, { packname: "𝙍𝙄𝘿𝙃𝙊 𝙂𝘼𝙉𝙕", author: "@𝘼𝙎𝙀𝙋 𝘽𝙊𝙏𝙕" })
}

handler.customPrefix = /^(wk|wkwk|wkwkwk|wkwkwkwkwk|lucu|ngakak|ngabrut|lawak|lawack|awok|AWOKAWOK|awokawokawok)$/i
handler.command = new RegExp

module.exports = handler
