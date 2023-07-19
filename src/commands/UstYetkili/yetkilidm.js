const conf = require("../../configs/sunucuayar.json")
const ayar = require("../../configs/settings.json")
const moment = require("moment");
moment.locale("tr");
const { red } = require("../../configs/emojis.json")
module.exports = {
  conf: {
    aliases: ["yetkili"],
    name: "yetkili",
    help: "yetkili"
  },

  run: async (client, message, args, embed) => {
    if (!message.member.roles.cache.has('902297402415906853')  && !message.member.hasPermission("ADMINISTRATOR")) return message.react(`<a:Iptal:908973586075750410>`)
    let enAltYetkiliRolü = message.guild.roles.cache.get('908743668406550588')
    let yetkililer = message.guild.members.cache.filter(s => s.roles.highest.position >= enAltYetkiliRolü.position && !s.user.bot)
    let sestekiyt = yetkililer.filter(s => s.voice.channel)
    let unsesyt = yetkililer.filter(s => !s.voice.channel)
    let aktifyt = yetkililer.filter(s => s.presence.status !== 'offline')
    let offlineyt = yetkililer.filter(s => s.presence.status === 'offline')
    let aktifunsesyt = yetkililer.filter(s => s.presence.status !== 'offline').filter(x => !x.voice.channel)



if (args[0] === "say") {
message.channel.send(embed.setDescription(`
\`•\` Sunucumuzdaki toplam yetkili sayısı: **${yetkililer.size}**
\`\`\`
⤷ Aktif yetkili sayısı: ${aktifyt.size}

⤷ Sesteki yetkili sayısı: ${sestekiyt.size}

⤷ Aktif olup seste olmayan yetkili sayısı: ${aktifunsesyt.size}
\`\`\``))

    }
    if (args[0] === "dm") {
        message.channel.send(embed.setDescription(`${aktifunsesyt.size} Yetkiliye ses çağrısı yapılıyor.`).setColor('RANDOM')).then(async(msg) => {
            aktifunsesyt.array().forEach(async(cross, index) => {
                setTimeout(async() => {
                    msg.edit(embed.setDescription(`${cross} Yetkilisine özelden mesaj atıldı.`))
                    cross.send(`Aktifsin fakat seste değilsin lütfen ses kanalına gir.\n ${message.guild.name}`).catch(err => message.channel.send(`${cross} Aktifsin fakat seste değilsin lütfen ses kanalına gir.`) && msg.edit(embed.setDescription(`${cross} kullanıcısına özelden mesaj gönderilemediği için kanala etiketlendi.`)))
                }, index * 1500)
            })

        })

    }
    if (!args[0]) {
        message.channel.send(embed.setDescription(`
    Yetkili komutları:

    \`•\` **.yetkili say**
    Yetkililer hakkında detaylı bilgili verir.

    \`•\` **.yetkili dm**
    Aktif olup seste olmayan yetkililere dm atar.
    `)).then(m => m.delete({ timeout: 7000 }) && message.delete({ timeout: 6999 }))

}
  
}}
