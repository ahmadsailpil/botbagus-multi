let handler = async m => m.reply(`
Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(bangsat|tolol|anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|puki|lonte|mursani|opek|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|Kontol|ppk|kontol|nigga|fuck|dick|bitch|tits|bastard|asshole|bgst)$/i
handler.command = new RegExp

module.exports = handler