let fetch = require('node-fetch')
let handler = async(m, { conn, args, usedPrefix, command }) => {
    let img = 'https://telegra.ph/file/9449e634daa0086c64900.jpg'
    if (!args[0]) conn.sendFile(m.chat, 'https://telegra.ph/file/9449e634daa0086c64900.jpg', '', `Please enter destination and filename\nExample: ${ usedPrefix + command } plugins/join.js`, m)
    require('fs').writeFileSync(`./${args[0]}`, m.quoted.text)
    conn.sendButtonImg(m.chat, await(await fetch(img)).buffer(), `Successfully save as ${args[0]}`, watermark, 'MENU', '.?', m)
}
handler.command = /^write$/i
handler.owner = true
module.exports = handler
