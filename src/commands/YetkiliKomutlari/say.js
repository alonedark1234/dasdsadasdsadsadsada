const conf = require("../../configs/sunucuayar.json")
const { red } = require("../../configs/emojis.json")
module.exports = {
  conf: {
    aliases: [],
    name: "say",
    help: "say",
  },

  /**
   * @param { Client } client
   * @param { Message } message
   * @param { Array<String> } args
   */

  run: async (client, message, args, embed) => {
    let toplam = message.guild.memberCount;
    let ses = message.guild.members.cache.filter(x => x.voice.channel).size
    let taglı = message.guild.members.cache.filter(x => x.user.username.includes('✯')).size
    let aktif = message.guild.members.cache.filter(x => x.presence.status !== "offline").size
    let boost = message.guild.premiumSubscriptionCount
    let boostlevel = message.guild.premiumTier
embed.setDescription(`
\`•\` **Sunucumuzda toplam __\`${toplam}\`__ üye var, (${aktif} çevrimiçi)**
 \`⤷\` **Toplam __\`${taglı}\`__ kişi tagımıza sahip.**
 \`⤷\` **Seste toplam __\`${ses}\`__ kullanıcı var.**
 \`⤷\` **Sunucumuza toplam __\`${boost}\`__ takviye yapılmış, (${boostlevel}. seviye)**`)  

  message.channel.send(embed)
 
   }
 }